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
HTMLとCSSのメタ言語であるHAMLとSCSSを使ってみる(楽しそうなので)
### HAML
Rubyで動く
#### インストール
`gem install haml`
#### コンパイル
`haml -q index.haml index.html`
- コンパイル前
    !!!
    %html
        %body
            %h1 タイトル
            %a{href: "https://www.google.com/"} リンク
- コンパイル後
    <!DOCTYPE html>
    <html>
    <body>
        <h1>タイトル</h1>
        <a href="https://www.google.com/">リンク</a>
    </body>
    </html>
[HAML公式ドキュメント](https://haml.info/docs/yardoc/file.REFERENCE.html)
### SCSS
調べ中...