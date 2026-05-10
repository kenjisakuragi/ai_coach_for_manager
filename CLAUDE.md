# Claude 作業ルール｜AI Coach for Manager

このリポジトリで作業するClaudeへの恒常的な指示です。新しいセッションでも、この内容に従って動きます。

---

## 1. ルーティン｜重要ポイントは知識ベースに保存する

会話の中で、**今後の作業に影響する判断・方針・知見** が出たら、その都度、適切な知識ベースファイルに追記する。記憶ではなくファイルに残すことで、新しいセッションでも整合性が保たれる。

### 何を保存するか

- サービス仕様の決定（商品名・料金・時間・返金条件・カリキュラム構成など）
- コピーライティングの方針（NG表現・OK表現・トーン・比喩）
- シリーズ運営の判断（番号付け・配信ペース・取り上げる経営者）
- 文体ルールの追加・更新
- リサーチ結果（公開ソースから取得した検証済み引用）

### どこに保存するか

| 種類 | 保存先 |
|---|---|
| サービス設計・商品仕様の決定 | `content/knowledge_base/product_decisions.md` |
| 文体ルール・コピーライティング | `content/knowledge_base/writing_style_rules.md` |
| シリーズ運営・記事ロードマップ | `content/knowledge_base/series_roadmap.md` |
| 候補経営者プロファイル | `content/knowledge_base/series_candidates.md` |
| 取材対象者の検証済み引用 | `content/knowledge_base/[人名].md`（例：`lancers_akiyoshi.md`） |
| YouTube書き起こし | `content/transcripts/<video_id>_<lang>.md` |

### 追記のフォーマット

各ファイルには **意思決定履歴** または **更新履歴** のテーブルがある。新しい判断は、そこに日付付きで追記する。背景・代替案・選択理由を簡潔に残す。

---

## 2. ディレクトリ構造

```
content/
├── knowledge_base/        # ナレッジ蓄積（リサーチ・運営ルール・サービス決定）
├── note_articles/         # 公開note記事（事例シリーズ・自己紹介・ハウツー）
│   └── case_studies/      # 著名経営者シリーズ（#02〜）
├── sales/                 # 営業資産（LP・スライド・メールテンプレ）
└── transcripts/           # YouTube書き起こし
```

---

## 3. 商品サービスの全体像

サービスは2層構造（詳細は `content/knowledge_base/product_decisions.md`）。

- **入口**：AI経営基礎レッスン（2時間・20,000円・全額返金保証付き）
- **本商品**：3か月／6か月伴走コース、月額継続サポート

商品仕様の変更時は、`product_decisions.md` の **整合性を維持すべき資産** リストに沿って LP記事・スライド・各事例記事末尾CTA を連動更新する。

---

## 4. 記事執筆のルール

- 文体は `content/knowledge_base/writing_style_rules.md` に従う
- シリーズ番号・取り上げる経営者は `content/knowledge_base/series_roadmap.md` で管理
- 著名人の発言は **必ず公開ソースの直接引用** に限定（`content/note_articles/case_studies/README.md` 参照）

---

## 5. このファイルの更新

`CLAUDE.md` 自体に変更を加えるのは、**プロジェクトの恒常的なルール** が変わる時だけ。一時的な作業指示は、その場の会話で完結させる。
