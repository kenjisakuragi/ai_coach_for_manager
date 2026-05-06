# 独自ドメイン（カスタムドメイン）の設定手順

> GitHub Pages で公開中のLPを、独自ドメインで配信するための手順書。
> 所要時間：5〜10分（ドメイン取得済の場合）

---

## ステップ1｜ドメインを取得（まだの場合）

### おすすめのレジストラ
| サービス | 特徴 | 年額の目安 |
|---|---|---|
| **Cloudflare Registrar** | 卸価格・最も安い・更新料も同額 | 約¥1,500〜 |
| **お名前.com** | 国内最大・初年度激安・更新料は普通 | 初年¥1〜・継続¥1,500〜 |
| **ムームードメイン** | UI分かりやすい・GMO系 | 約¥1,500〜 |
| **Google Domains（→Squarespace）** | サポート移行中 | - |

### ドメイン名の候補
ブランド名から逆算：
- `aichiefofstaff.jp` / `.com` / `.co`
- `ai-staff.jp`
- `ai-coach.jp`
- `claude-code.jp`（Anthropic商標に注意）
- `keiei-ai.jp` / `keieishaai.jp`
- `nyumon.ai`

→ 取得前に、SNSアカウント（X, Instagram）の取得可否も同時確認推奨

---

## ステップ2｜CNAMEファイルを追加

`gh-pages` ブランチ直下に `CNAME` ファイル（拡張子なし）を作成し、内容に独自ドメインを書きます。

```
aichiefofstaff.jp
```

→ 私が即対応できます。ドメインが決まったらお知らせください。

---

## ステップ3｜DNS設定

レジストラの管理画面で、以下のレコードを追加します。

### 推奨：Apex（裸ドメイン）+ www の両方を設定

#### `aichiefofstaff.jp` （ apex / 裸ドメイン）の場合
**Aレコード**を4つ追加（GitHub Pages の固定IP）：
```
タイプ: A   ホスト: @   値: 185.199.108.153
タイプ: A   ホスト: @   値: 185.199.109.153
タイプ: A   ホスト: @   値: 185.199.110.153
タイプ: A   ホスト: @   値: 185.199.111.153
```

#### `www.aichiefofstaff.jp` のリダイレクト
**CNAMEレコード**を1つ：
```
タイプ: CNAME   ホスト: www   値: kenjisakuragi.github.io
```

### サブドメイン（例：`lp.aichiefofstaff.jp`）だけで運用する場合
**CNAMEレコードのみ**：
```
タイプ: CNAME   ホスト: lp   値: kenjisakuragi.github.io
```
→ Aレコード設定が不要なので最も簡単

---

## ステップ4｜GitHub の設定

DNS反映後（数分〜最大24時間、通常10分以内）：

1. リポジトリの Settings → Pages
2. **Custom domain** に `aichiefofstaff.jp` を入力 → Save
3. **Enforce HTTPS** にチェック（数分後に自動でON可能になる）

---

## ステップ5｜動作確認

設定が完了すると、以下のURLで同じ内容が表示されます：

```
https://aichiefofstaff.jp/                 （LP一覧）
https://aichiefofstaff.jp/lp/v1/           （標準LP）
https://aichiefofstaff.jp/lp/coconala/     （ココナラ用）
https://aichiefofstaff.jp/lp/jv-a/         （JV-A用）
https://aichiefofstaff.jp/lp/jv-b/         （JV-B用）
https://aichiefofstaff.jp/slides/          （スライド）
```

HTTPS は GitHub が Let's Encrypt 経由で自動取得するので、追加作業ゼロです。

---

## トラブルシューティング

### Q. DNS設定したのにつながらない
- DNS反映まで最大24時間かかることがあります
- `dig aichiefofstaff.jp` で確認可能
- レジストラのDNSが伝播し始めるまで数分待ってから再確認

### Q. HTTPS が「Enforce」できない
- 「Custom domain」設定後、GitHub側で証明書発行に5〜30分かかります
- "Certificate Issued" の表示が出てから Enforce 可能に

### Q. SubdirectoryとCustomDomainの併用
- 独自ドメインを使うと、`/ai_coach_for_manager/` のサブパスは消えます
- 例：`https://kenjisakuragi.github.io/ai_coach_for_manager/lp/v1/`
       → `https://aichiefofstaff.jp/lp/v1/` に短縮

### Q. www あり/なし、どっちにする？
- 短い方（apex / 裸ドメイン）を主にする方が今風です
- 例：`aichiefofstaff.jp` がメイン、`www.aichiefofstaff.jp` はリダイレクト

---

## 推奨フロー

1. **ドメイン名候補を3つ決める**（私と相談OK）
2. **取得**（5分・年¥1,500〜）
3. **私に取得済みドメインを教える**
4. **私がCNAMEファイルを追加 + プッシュ**
5. **あなたがレジストラのDNS設定**（5分・上記コピペ）
6. **数十分待つ**
7. **GitHub の Custom domain 設定**（1分）
8. **HTTPS Enforce にチェック**（1分）
9. **完成**

→ 合計15〜20分の手順で、独自ドメインで全LPが公開されます。

---

## 参考｜DNS反映の確認方法

ターミナルで：
```bash
dig aichiefofstaff.jp
# A レコードに 185.199.108-111.153 が表示されればOK

nslookup aichiefofstaff.jp
# 同上
```

オンラインツール：
- https://dnschecker.org/
- https://www.whatsmydns.net/
