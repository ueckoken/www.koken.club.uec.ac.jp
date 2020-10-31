# 工研ポータルサイト指針
## 載せる情報
- 各作品へのリンク
    - 作品名
    - 写真
    - 作者名
    - 簡易説明文
- 外部サイトへのリンク
    - 工研サイト(外部ではないけど)
    - 工研各SNS
    - 調布祭HP
## デザイン
各作品へのハブの役割なのでワンページ。
- フレキシブルデザイン  
PC、タブレット、スマホで作品欄の1列に入るセクションの数を変える。
    - 3個(PC、横タブレット)
    - 2個(縦タブレット)
    - 1個(スマホ)
- 装飾  
基板風  
工研の強みはソフトとハードの両方やってることなのであいのこのマイコンをモチーフにする。
## 技術
HTMLとCSSのメタ言語であるHAMLとSCSSを使ってみる。(おもしろそうなので)
### HAML
Rubyで動く。
- インストール  
`gem install haml`
- コンパイル  
`haml -q index.haml index.html`
#### 参考
- [HAML公式サイト](https://haml.info/)
### SCSS
Rubyで動く、が今回はnode.js版にした。
- インストール  
`npm install node-sass`
-  コンパイル  
`node-sass --output-style expanded --indent-width 4 style.scss style.css`
#### 参考
- [SASS公式サイト](https://sass-lang.com/)
## 書いた人
淵野アタリ
