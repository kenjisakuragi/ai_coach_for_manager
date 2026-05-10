# Mac｜Claude Code 環境構築手順書

> 第1回セッションの前日までに、これに沿ってインストールを試してみてください。
> 当日にうまく動かなくても大丈夫です。一緒に解決します。

---

## 所要時間
約 20〜30分（事前準備が整っている場合は10分）

## 必要なもの
- Mac（macOS Monterey 以降推奨）
- インターネット接続
- Anthropicアカウント（claude.ai でPro契約済み）
- 管理者権限のあるユーザーアカウント

---

## ステップ1｜Homebrew（パッケージ管理ツール）の確認

### Homebrew が入っているか確認
ターミナルを開いて：
```bash
brew --version
```

→ バージョンが表示されたらOK。スキップして次のステップへ。

### 入っていない場合
[Homebrew公式サイト](https://brew.sh/index_ja) から、表示されているコマンドをコピペしてターミナルで実行：

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

→ パスワードを求められるので、Macのログインパスワードを入力。

> ⚠️ 約10分かかります。

---

## ステップ2｜Node.js のインストール

Claude Code は Node.js が必要なので、先に入れます。

```bash
brew install node
```

確認：
```bash
node --version  # v20以上が表示されればOK
npm --version   # 10以上が表示されればOK
```

---

## ステップ3｜Claude Code CLI のインストール

```bash
npm install -g @anthropic-ai/claude-code
```

確認：
```bash
claude --version
```

→ バージョン番号が表示されたらOK。

---

## ステップ4｜認証

```bash
claude
```

初回起動時、ブラウザが開いて Anthropic のログイン画面が表示されます。
→ Pro契約しているアカウントでログイン
→ 「許可する」をクリック
→ ターミナルに戻ると "Authentication successful" と出る

---

## ステップ5｜作業ディレクトリの作成

```bash
cd ~
mkdir AI_Chief_of_Staff
cd AI_Chief_of_Staff
```

これからすべての作業はこのディレクトリで行います。

---

## ステップ6｜動作確認

ディレクトリ内で：
```bash
claude
```

何か話しかけてみる：
```
> こんにちは。私の名前は〇〇です。覚えてください。
```

Claude が "了解しました、〇〇さん..." と返してきたら成功！

---

## トラブルシューティング

### `command not found: brew`
Homebrew のパスが通っていない可能性。以下を実行：

```bash
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
source ~/.zprofile
```

→ 再度 `brew --version` を実行

### `command not found: claude`
npm グローバルインストールのパスが通っていない可能性。

```bash
echo 'export PATH="$HOME/.npm-global/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
```

### 認証エラー
- Anthropic Pro契約が有効か確認
- ブラウザを変えて試す
- VPN・プロキシを切って試す

### 動作が遅い
- ネットワーク状況を確認
- Anthropic APIの混雑状況を確認（[ステータスページ](https://status.anthropic.com/)）

### "Permission denied" エラー
管理者権限が必要なコマンドの場合、`sudo` をつけて実行：
```bash
sudo npm install -g @anthropic-ai/claude-code
```

→ Macのログインパスワードを入力

### 会社のセキュリティポリシーで brew が使えない
代替案：
- 公式インストーラーをダウンロードして手動インストール
- 仮想環境（Docker）で構築
- ブラウザ版 Claude（claude.ai）から始める（CLAUDE.mdの恩恵は限定的）

→ セッション当日に一緒に解決策を考えます

---

## インストール完了後の確認チェックリスト

- [ ] `brew --version` でバージョンが出る
- [ ] `node --version` で v20以上が出る
- [ ] `claude --version` でバージョンが出る
- [ ] `claude` コマンドで起動して、対話できる
- [ ] `~/AI_Chief_of_Staff/` ディレクトリが作られている

すべてチェックがついたら、第1回セッションの準備完了です！

---

## よくある質問

### Q. 個人アカウントと会社アカウント、どちらでセットアップすればいい？
A. 会社の業務に使うなら、会社のメールアドレスでAnthropicアカウントを作るのが理想です。
ただし、最初は個人アカウントで試して、慣れてから会社アカウントに移行するのも可です。

### Q. 妻のMacも同じセットアップしていい？
A. ライセンス的にはアカウント単位なので、家族と共有するのは契約違反になる可能性があります。
別アカウントで別途契約するのが安全。

### Q. インストールしたものを後で消したくなったら？
A. 以下で削除できます：
```bash
npm uninstall -g @anthropic-ai/claude-code
brew uninstall node
```
ディレクトリも：
```bash
rm -rf ~/AI_Chief_of_Staff
```
