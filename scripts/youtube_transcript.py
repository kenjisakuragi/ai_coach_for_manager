#!/usr/bin/env python3
"""
YouTube 書き起こし取得スクリプト

使い方:
  # ①自動取得を試行（環境によってはブロックされる）
  python3 scripts/youtube_transcript.py <youtube_url> [--lang ja]

  # ②手動貼り付けモード（自動取得失敗時の確実な方法）
  python3 scripts/youtube_transcript.py <youtube_url> --paste path/to/raw_transcript.txt

  # ③stdin からパイプで貼り付け
  cat raw.txt | python3 scripts/youtube_transcript.py <youtube_url> --paste -

優先順位（自動取得時）:
  1. youtube-transcript-api（公式字幕、最速）
  2. yt-dlp（自動生成字幕含む、フォールバック）

成功時:
  content/transcripts/<video_id>_<lang>.md に Markdown 保存。
"""

import argparse
import json
import re
import subprocess
import sys
import tempfile
from pathlib import Path
from urllib.parse import parse_qs, urlparse


def extract_video_id(url: str) -> str:
    parsed = urlparse(url)
    if parsed.hostname in ("youtu.be", "www.youtu.be"):
        return parsed.path.lstrip("/")
    if parsed.hostname and "youtube.com" in parsed.hostname:
        qs = parse_qs(parsed.query)
        if "v" in qs:
            return qs["v"][0]
        m = re.search(r"/(?:embed|shorts|live)/([\w-]+)", parsed.path)
        if m:
            return m.group(1)
    raise ValueError(f"YouTube video ID を抽出できません: {url}")


def fetch_via_api(video_id: str, lang: str) -> tuple[str, str] | None:
    """youtube-transcript-api（>= 1.0）の新 API で取得"""
    try:
        from youtube_transcript_api import YouTubeTranscriptApi
    except ImportError:
        print("[api] youtube-transcript-api 未インストール", file=sys.stderr)
        return None

    try:
        api = YouTubeTranscriptApi()
        try:
            fetched = api.fetch(video_id, languages=[lang, "ja", "en"])
            method = f"youtube-transcript-api (lang={lang})"
        except Exception:
            transcripts = api.list(video_id)
            transcript = next(iter(transcripts))
            fetched = transcript.fetch()
            method = f"youtube-transcript-api (fallback={transcript.language_code})"

        # 新 API は FetchedTranscript オブジェクト or list of dicts を返す
        snippets = fetched.snippets if hasattr(fetched, "snippets") else fetched
        lines = []
        for s in snippets:
            start = s.start if hasattr(s, "start") else s["start"]
            text = s.text if hasattr(s, "text") else s["text"]
            t = int(start)
            mm, ss = t // 60, t % 60
            lines.append(f"({mm:02d}:{ss:02d}) {text}")
        return "\n".join(lines), method
    except Exception as e:
        print(f"[api] 失敗: {type(e).__name__}: {e}", file=sys.stderr)
        return None


def fetch_via_ytdlp(video_id: str, lang: str) -> tuple[str, str] | None:
    """yt-dlp で字幕（自動生成含む）取得"""
    url = f"https://www.youtube.com/watch?v={video_id}"
    with tempfile.TemporaryDirectory() as tmp:
        for sub_arg in (
            ["--write-subs", "--sub-langs", lang],
            ["--write-auto-subs", "--sub-langs", lang],
            ["--write-auto-subs", "--sub-langs", "ja"],
            ["--write-auto-subs", "--sub-langs", "en"],
        ):
            cmd = [
                "yt-dlp", "--no-check-certificates", "--skip-download",
                "--sub-format", "vtt", *sub_arg,
                "-o", f"{tmp}/%(id)s.%(ext)s", url,
            ]
            try:
                subprocess.run(cmd, capture_output=True, text=True, timeout=120)
            except subprocess.TimeoutExpired:
                continue
            vtts = list(Path(tmp).glob(f"{video_id}*.vtt"))
            if vtts:
                text = parse_vtt(vtts[0].read_text(encoding="utf-8"))
                if text.strip():
                    return text, f"yt-dlp ({' '.join(sub_arg)})"
    print("[yt-dlp] 失敗（字幕取得不可）", file=sys.stderr)
    return None


def parse_vtt(vtt: str) -> str:
    out_lines, current_time, seen = [], None, set()
    for line in vtt.splitlines():
        line = line.strip()
        if not line or line.startswith(("WEBVTT", "Kind:", "Language:", "NOTE")):
            continue
        m = re.match(r"^(\d{2}):(\d{2}):(\d{2})\.\d+\s+-->", line)
        if m:
            total = int(m.group(1)) * 3600 + int(m.group(2)) * 60 + int(m.group(3))
            current_time = f"({total // 60:02d}:{total % 60:02d})"
            continue
        if "-->" in line:
            continue
        clean = re.sub(r"<[^>]+>", "", line).strip()
        if not clean or clean in seen:
            continue
        seen.add(clean)
        out_lines.append(f"{current_time} {clean}" if current_time else clean)
        current_time = None
    return "\n".join(out_lines)


def fetch_metadata(video_id: str) -> dict:
    try:
        result = subprocess.run(
            ["yt-dlp", "--no-check-certificates", "--skip-download", "--print-json", "--no-warnings",
             f"https://www.youtube.com/watch?v={video_id}"],
            capture_output=True, text=True, timeout=60,
        )
        if result.returncode == 0 and result.stdout:
            data = json.loads(result.stdout.split("\n")[0])
            return {
                "title": data.get("title", ""),
                "uploader": data.get("uploader", ""),
                "duration": data.get("duration", 0),
            }
    except Exception:
        pass
    return {"title": "", "uploader": "", "duration": 0}


def normalize_pasted(raw: str) -> str:
    """貼り付けたテキストを軽く整形（余計な空行を除去）"""
    lines = [ln.rstrip() for ln in raw.splitlines()]
    lines = [ln for ln in lines if ln.strip()]
    return "\n".join(lines)


def save_markdown(out_path: Path, video_id: str, url: str, transcript: str,
                  method: str, meta: dict) -> None:
    out_path.parent.mkdir(parents=True, exist_ok=True)
    duration = meta.get("duration", 0)
    duration_str = f"{duration // 60}分{duration % 60}秒" if duration else "不明"
    body = (
        f"# {meta.get('title') or f'YouTube {video_id}'}\n\n"
        f"- **URL**: {url}\n"
        f"- **動画ID**: {video_id}\n"
        f"- **チャンネル**: {meta.get('uploader') or '不明'}\n"
        f"- **長さ**: {duration_str}\n"
        f"- **取得方法**: {method}\n\n"
        f"---\n\n## 書き起こし\n\n{transcript}\n"
    )
    out_path.write_text(body, encoding="utf-8")


def main() -> int:
    parser = argparse.ArgumentParser(description="YouTube 書き起こしを取得して Markdown 保存する")
    parser.add_argument("url", help="YouTube URL")
    parser.add_argument("--lang", default="ja", help="優先言語 (既定: ja)")
    parser.add_argument("--out", default=None, help="出力 Markdown パス")
    parser.add_argument("--paste", default=None,
                        help="手動貼り付けモード: テキストファイルパス、または '-' で stdin")
    args = parser.parse_args()

    try:
        video_id = extract_video_id(args.url)
    except ValueError as e:
        print(f"エラー: {e}", file=sys.stderr)
        return 2

    print(f"動画ID: {video_id}", file=sys.stderr)

    # 手動貼り付けモード
    if args.paste:
        if args.paste == "-":
            raw = sys.stdin.read()
            print("(stdin から書き起こしを読み込み)", file=sys.stderr)
        else:
            raw = Path(args.paste).read_text(encoding="utf-8")
            print(f"(ファイル読み込み: {args.paste})", file=sys.stderr)
        transcript = normalize_pasted(raw)
        method = "手動貼り付け"
    else:
        # 自動取得試行
        print("[1/2] youtube-transcript-api を試行中...", file=sys.stderr)
        result = fetch_via_api(video_id, args.lang)
        if not result:
            print("[2/2] yt-dlp フォールバックを試行中...", file=sys.stderr)
            result = fetch_via_ytdlp(video_id, args.lang)
        if not result:
            print(
                "\n両方の自動方法で取得失敗しました。\n"
                "対処オプション:\n"
                "  A. ブラウザで動画を開き、「文字起こしを表示」からコピー、\n"
                "     ファイルに保存して --paste <path> で再実行\n"
                "  B. https://tubetranscript.com/ja に URL を貼って取得、--paste で読み込み\n"
                "  C. ローカル環境（Cookie 認証あり）で再実行",
                file=sys.stderr,
            )
            return 1
        transcript, method = result

    meta = fetch_metadata(video_id)
    out_path = Path(args.out) if args.out else Path(f"content/transcripts/{video_id}_{args.lang}.md")
    save_markdown(out_path, video_id, args.url, transcript, method, meta)

    print(f"\n保存完了: {out_path}", file=sys.stderr)
    print(f"取得方法: {method}", file=sys.stderr)
    print(f"行数: {len(transcript.splitlines())}", file=sys.stderr)
    return 0


if __name__ == "__main__":
    sys.exit(main())
