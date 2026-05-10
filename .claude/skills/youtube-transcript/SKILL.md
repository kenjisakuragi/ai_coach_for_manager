---
name: youtube-transcript
description: YouTube 動画の書き起こしを取得し、`content/transcripts/<video_id>_<lang>.md` に Markdown 形式で保存する。事例記事執筆や知識ベース整備の前段として使う。自動取得が環境制約で失敗する場合は手動貼り付けモードに切り替える。
---

# YouTube 書き起こし取得スキル

このスキルは、YouTube 動画の書き起こし（字幕、文字起こし）を取得して Markdown ファイルに保存するためのワークフローを定義する。

「Claude Code経営活用事例」シリーズの記事執筆や、有名経営者の発言の知識ベース化の前段として使われる。

## いつ使うか

ユーザーが以下のいずれかの依頼をした時：

- 「この YouTube 動画の書き起こしを取って」
- 「<URL> の文字起こしを保存して」
- 「<経営者名> の YouTube 動画を分析したい」
- 「事例記事の素材として動画の中身を取得して」

## 何を提供するか

1. 動画 ID（例：`p1CTJM8UNEE`）と URL の認識
2. 自動取得を順次試行（youtube-transcript-api → yt-dlp）
3. 失敗時は手動貼り付けモードへ切り替えを案内
4. 取得した内容を `content/transcripts/<video_id>_<lang>.md` に保存
5. 動画タイトル・チャンネル・長さなどメタデータを冒頭に付与

## 使い方

### Step 1: スクリプトの存在を確認

```bash
ls scripts/youtube_transcript.py
```

存在しない場合はリポジトリのこのスキルが破損している。報告して停止する。

### Step 2: 自動取得を試行

```bash
python3 scripts/youtube_transcript.py "<youtube_url>" --lang ja
```

オプション：
- `--lang ja` — 優先言語（既定 ja、英語動画なら en）
- `--out path/to/file.md` — 出力先を明示指定（既定 `content/transcripts/<video_id>_<lang>.md`）

### Step 3: 自動取得が失敗した時の手動貼り付け手順

YouTube は環境（プロキシ・SSL・bot 判定）によって直接アクセスをブロックすることがある。失敗した場合：

**方法A：YouTube 公式 UI から取得**
1. ブラウザで動画ページを開く
2. 説明欄の下「文字起こしを表示」ボタンをクリック
3. 表示された書き起こしを全選択コピー
4. テキストファイル `/tmp/transcript.txt` に保存
5. 以下を実行：

```bash
python3 scripts/youtube_transcript.py "<youtube_url>" --paste /tmp/transcript.txt
```

**方法B：tubetranscript.com を使う**
1. https://tubetranscript.com/ja を開く
2. URL を貼り付けて「Generate」
3. 結果をコピー → ファイル保存 → 上記コマンドで読み込み

**方法C：stdin パイプ**
```bash
cat raw_text.txt | python3 scripts/youtube_transcript.py "<youtube_url>" --paste -
```

### Step 4: 保存結果を確認

```bash
ls -la content/transcripts/
head -15 content/transcripts/<video_id>_<lang>.md
```

冒頭にタイトル・URL・チャンネル・長さ・取得方法のメタデータがあり、`## 書き起こし` 以下に時刻つきテキストが入っていれば成功。

## 出力ファイルの構造

```markdown
# <動画タイトル>

- **URL**: <YouTube URL>
- **動画ID**: <video_id>
- **チャンネル**: <チャンネル名>
- **長さ**: <分秒>
- **取得方法**: <方法名>

---

## 書き起こし

(00:00) ...
(00:15) ...
...
```

## 環境制約と既知の問題

- YouTube は cloud / sandbox 環境からの直接アクセスを bot 判定でブロックすることが多い
- yt-dlp も `Sign in to confirm you're not a bot` で失敗するケースあり
- `youtube-transcript-api` 1.0 以降は API が変わっている（インスタンス経由 `.fetch()`）
- これらの理由で **自動取得は確実とは言えない**。手動貼り付けモードを正式手段として活用する

## このスキルが守るべき原則

1. **書き起こしを取得しただけで記事は書かない**。取得後、ユーザーに完了を報告して指示を待つ
2. **既存の `content/transcripts/<video_id>_*.md` がある場合は上書き確認** を求める
3. **取得方法を必ず Markdown 冒頭に明記**（後で「これは自動か手動か」が追える）
4. 引用を記事に使う際は **必ず動画の URL と取得日を明記** する

## 関連知識ベース

取得した書き起こしから引用候補を抽出し、関連する知識ベースに整理する：

- `content/knowledge_base/lancers_akiyoshi.md` — ランサーズ秋好社長
- `content/knowledge_base/dena_namba.md` — DeNA 南場会長
- `content/knowledge_base/keyplayers_takano.md` — キープレイヤーズ高野氏
- `content/knowledge_base/series_candidates.md` — シリーズ候補者リスト

新規経営者の知識ベースを作る場合は、上記のファイル構造を参考にする。
