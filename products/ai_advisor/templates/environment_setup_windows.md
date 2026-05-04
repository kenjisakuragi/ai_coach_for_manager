# Windows｜Claude Code 環境構築手順書

> 第1回セッションの前日までに、これに沿ってインストールを試してみてください。
> 当日にうまく動かなくても大丈夫です。一緒に解決します。

---

## 所要時間
約 30〜40分（Mac版より少し時間がかかります）

## 必要なもの
- Windows 11 推奨（Windows 10 でも可）
- インターネット接続
- Anthropicアカウント（claude.ai でPro契約済み）
- 管理者権限のあるアカウント

---

## ステップ1｜PowerShell を管理者として起動

1. スタートメニューを開く
2. 「PowerShell」と入力
3. **「Windows PowerShell」を右クリック → 「管理者として実行」**
4. 「このアプリがデバイスに変更を加えることを許可しますか？」→ 「はい」

---

## ステップ2｜Node.js のインストール

### 方法A｜公式インストーラー（推奨）

1. [Node.js公式サイト](https://nodejs.org/ja) を開く
2. **LTS版**（左側の緑のボタン）をクリックしてダウンロード
3. ダウンロードした .msi ファイルをダブルクリック
4. 「Next」を連打して進める
5. インストール完了

### 確認

PowerShell（管理者）で：
```powershell
node --version
npm --version
```

→ 両方バージョンが出ればOK

### 出ない場合（PATHが通っていない）
PowerShell を一度閉じて、再度管理者として起動 → もう一度試す

---

## ステップ3｜Claude Code CLI のインストール

PowerShell（管理者）で：
```powershell
npm install -g @anthropic-ai/claude-code
```

確認：
```powershell
claude --version
```

---

## ステップ4｜認証

```powershell
claude
```

初回起動時、ブラウザが開いて Anthropic のログイン画面が表示されます。
→ Pro契約しているアカウントでログイン
→ 「許可する」をクリック
→ PowerShell に戻ると "Authentication successful"

---

## ステップ5｜作業ディレクトリの作成

PowerShell で：
```powershell
cd $HOME
mkdir AI_Chief_of_Staff
cd AI_Chief_of_Staff
```

または、エクスプローラーで C:\Users\〇〇\AI_Chief_of_Staff を作成してもOK

---

## ステップ6｜動作確認

ディレクトリ内で：
```powershell
claude
```

```
> こんにちは。私の名前は〇〇です。覚えてください。
```

Claude が "了解しました、〇〇さん..." と返してきたら成功！

---

## トラブルシューティング

### `claude: コマンドが見つかりません`

#### 原因①：PATHが通っていない
PowerShell を **管理者として再起動** してから実行

#### 原因②：npmグローバルパスが特殊
以下で npm のパスを確認：
```powershell
npm config get prefix
```

→ そのパスが PATH に含まれているか確認

PATHに追加するには：
1. スタートメニューで「環境変数」と検索
2. 「ユーザー環境変数」の「Path」を編集
3. npm prefix のパスを追加

### `npm install` が遅い／止まる

社内ネットワーク／プロキシが原因の可能性。
プロキシ設定：
```powershell
npm config set proxy http://your-proxy:port
npm config set https-proxy http://your-proxy:port
```

### 文字化け（日本語が ??? になる）

PowerShell の文字コード設定：
```powershell
chcp 65001
```

→ UTF-8 になります。毎回入力するのが面倒なら、PowerShell プロファイルに追加。

### Windowsセキュリティでブロックされる

「不明な発行元」「Windows Defender SmartScreen」のメッセージが出た場合：
1. 「詳細情報」をクリック
2. 「実行」を選択
3. それでもブロックされる場合は、IT管理者に確認

### 会社PCでインストール権限がない

会社のセキュリティポリシーで管理者権限が制限されている場合：
- IT部門に「Node.js と Claude Code CLI のインストール許可」を依頼
- または、個人PC でセットアップして、業務PC とは別運用にする

---

## インストール完了後の確認チェックリスト

- [ ] `node --version` で v20以上が出る
- [ ] `npm --version` でバージョンが出る
- [ ] `claude --version` でバージョンが出る
- [ ] `claude` コマンドで起動して、対話できる
- [ ] `C:\Users\〇〇\AI_Chief_of_Staff\` ディレクトリが作られている

---

## Windows特有の注意点

### Mac との違い

| 項目 | Mac | Windows |
|---|---|---|
| ターミナル | Terminal.app | PowerShell |
| パッケージ管理 | Homebrew | （Node.jsは公式インストーラ） |
| 管理者起動 | sudo | 「管理者として実行」 |
| パスの区切り | / | \ または / |
| ホームディレクトリ | ~ | $HOME または %USERPROFILE% |

### WSL2（応用）

Linux環境を Windows 上で動かしたい場合は WSL2（Windows Subsystem for Linux）を使う方法もあります。
ただし初心者には複雑なので、当面は **PowerShell 直接** で十分です。

WSL2を使うメリット：
- Mac/Linux と同じコマンドが使える
- 開発者コミュニティの情報がそのまま使える

WSL2のセットアップは別途お問い合わせください。

---

## よくある質問

### Q. PowerShell と コマンドプロンプト（cmd）、どちらを使う？
A. **PowerShell** を推奨。新しいツール・機能が使えます。

### Q. PowerShell の代わりに Git Bash でも良い？
A. 動きます。Mac と同じ感覚で使えるので、Git Bash がしっくり来る方はそちらでOK。

### Q. ノートPCでインストールしたが、デスクトップでも使いたい
A. 各PCで個別にインストールが必要です。CLAUDE.md は USB / クラウドストレージで同期。

### Q. インストールしたものを消したい
```powershell
npm uninstall -g @anthropic-ai/claude-code
```

Node.js は「アプリと機能」から削除。

ディレクトリは：
```powershell
Remove-Item -Recurse $HOME\AI_Chief_of_Staff
```

---

## それでもうまくいかない場合

第1回セッションの前日までに連絡してください。
- 一緒に画面共有しながらセットアップ
- どうしてもダメなら、講師PCの画面を共有していただいてリモート操作で進める方法もあります

セットアップは慣れていない方は誰でもつまずきます。気にせず連絡を！
