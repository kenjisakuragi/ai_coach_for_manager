# リサーチ・ログ

> 経営者AI活用記事のリサーチで使った方法・成功例・失敗例の記録。
> 次回以降のリサーチ効率化のために蓄積します。

---

## 成功パターン

### ✅ note.com の記事取得（個別URL）
- WebFetch で問題なく取得可能
- HTML→Markdown 変換が高品質
- 著者・公開日・本文をきれいに抽出可

### ✅ note.com のクリエイターページ
- 例：https://note.com/keyplayers
- 記事一覧を取得可能（ただしURLは取得しにくい場合あり）
- 個別URLは別途調べる必要あり

### ✅ YouTube oEmbed API
- URL：https://www.youtube.com/oembed?url=...&format=json
- タイトル・チャンネル名・サムネイルが取得可能
- 動画本編・書き起こしは取得不可

---

## 失敗パターン

### ❌ YouTube直接アクセス
- 通常のyoutu.be / youtube.com URL → 503エラー or Google認証page にリダイレクト
- 動画ページ自体の取得不可

### ❌ YouTube書き起こしサービス
試したサービス：
- youtubetranscript.com → 403 Forbidden
- tactiq.io/tools/youtube-transcript → 静的ページのみ（JavaScriptで生成）
- tubetranscript.com → 静的ページのみ（JavaScriptで生成）
- downsub.com → 403 Forbidden
- youtube-transcript.io → 静的ページのみ（JavaScriptで生成）
- video.google.com/timedtext → 取得不可
- youtubetotranscript.com → 403 Forbidden

**原因**：これらサービスはJavaScriptで動的に書き起こしを生成するため、HTML取得のみのWebFetchでは内容を取得できない。

### ❌ 検索エンジン
- google.com/search → エラーページ
- bing.com/search → 403 Forbidden
- duckduckgo.com → ヘッダーのみ取得（検索結果は JavaScript で生成）

### ❌ Web Archive (Wayback Machine)
- web.archive.org は Claude Code から直接アクセス不可

---

## 推奨する代替アプローチ

### YouTube動画の内容を取得したい場合
1. **桜木さんが手動で書き起こしを取得**：
   - tubetranscript.com / tactiq.io / notta 等を **ブラウザで開いて** 書き起こしを取得
   - 取得した文字列をチャットに貼り付け
   - 私が要約・引用候補抽出

2. **動画の概要を関連記事から推測**：
   - YouTube oEmbed API でタイトル取得
   - そのタイトルで note・ブログ・X を検索して、視聴感想を探す
   - 公式IR資料・プレスリリースで補完

### 検索エンジンを使いたい場合
- Web検索は実質的に不可能
- 桜木さんが検索して、ヒットした記事URLを共有 → 私が WebFetch で取得

### 著名人のSNS発言を取得したい場合
- X（旧Twitter）は通常 WebFetch で取得困難
- 公式note・公式ブログ・プレスリリースを推奨
- インタビュー記事（NewsPicks、Forbes JAPAN等）は記事URLがあれば取得可能

---

## リサーチを依頼する際の効果的な指示

### 良い指示例（URL指定）
```
以下のURLを WebFetch で取得し、AI関連の発言を抽出してください：
- https://note.com/akiyoshiy/n/xxxxx
- https://forbesjapan.com/articles/xxxxx
```

### 悪い指示例（オープンサーチ）
```
秋好社長のAI関連発言をネットで探してください
→ 検索エンジンが使えないため、URLが分からないと進められない
```

---

## 知識の更新方針

桜木さんが新しいURL or 書き起こしを共有してくれたら、
**該当する knowledge_base/ の該当ファイルに即追記** します。

知識の蓄積が、長期的なコンテンツ資産になります。

---

## 知識の更新履歴

| 日付 | リサーチ内容 | 結果 |
|---|---|---|
| 2026-XX-XX | YouTube動画 6dRQ8qs2A-8 の書き起こし | タイトル取得、本編取得不可 |
| 2026-XX-XX | note.com/keyplayers の高野秀敏記事 4本 | 全文取得・抽出成功 |
| 2026-XX-XX | 秋好陽介氏 AI関連発言（並行リサーチ中） | 結果待ち |
