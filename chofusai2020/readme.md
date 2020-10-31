# 工研ポータルサイト指針
## 載せる情報
- 各作品へのリンク
    - 名前
    - 写真
    - 簡易説明文
- 外部サイトへのリンク
    - 工研サイト(外部ではないけど)
    - 工研各SNS
    - 調布祭HP
## デザイン
準備中...
## 技術
HTMLとCSSのメタ言語であるHAMLとSCSSを使ってみる(おもしろそうなので)
### HAML
Rubyで動く
#### インストール
`gem install haml`
#### コンパイル
`haml -q index.haml index.html`
#### リンク
- [HAML公式サイト](https://haml.info/)
### SCSS
rubyで動く、が今回はnode.js版にした
#### インストール
`npm install node-sass`
#### コンパイル
`node-sass --output-style expanded --indent-width 4 style.scss style.css`
#### リンク
- [SASS公式サイト](https://sass-lang.com/)
## 書いた人
淵野アタリ
