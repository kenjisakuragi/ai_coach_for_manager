# AI Chief of Staff Lab.｜Public Pages

このブランチ（`gh-pages`）は GitHub Pages で公開される静的サイト用のブランチです。
**ソースコード・ドキュメントは `claude/executive-claude-code-business-KmbGi` または `main` ブランチ**を参照してください。

## ディレクトリ構成

```
/                           ← ランディング（LP一覧・noindex）
├── lp/
│   ├── v1/                ← 標準LP
│   ├── coconala/          ← ココナラ経由用
│   ├── jv-a/              ← JVパートナーA経由用
│   └── jv-b/              ← JVパートナーB経由用
├── slides/                ← ウェビナー用HTMLスライドデッキ
├── marketplace_preview/   ← マーケットプレイス画像プレビュー
├── 404.html               ← 404エラー時の表示
└── .nojekyll              ← Jekyllを無効化（ファイル名アンダースコア許容）
```

## 公開URL（GitHub Pages有効化後）

ベースURL：`https://kenjisakuragi.github.io/ai_coach_for_manager/`

| パス | 用途 |
|---|---|
| `/` | LP一覧（管理用・noindex） |
| `/lp/v1/` | 標準LP |
| `/lp/coconala/` | ココナラ流入用 |
| `/lp/jv-a/` | JVパートナーA経由用 |
| `/lp/jv-b/` | JVパートナーB経由用 |
| `/slides/` | ウェビナースライド |

## 編集の流れ

各LPの編集は、このブランチで直接行うか、または source ブランチで編集後に gh-pages へ同期します。

### 直接編集する場合
```bash
git checkout gh-pages
# lp/v1/index.html を編集
git add . && git commit -m "Update LP v1"
git push origin gh-pages
# → 数分後にGitHub Pagesで反映
```

### Pages の有効化（初回のみ）

リポジトリ設定 → Pages → "Deploy from a branch" → `gh-pages` / `/ (root)` を選択
