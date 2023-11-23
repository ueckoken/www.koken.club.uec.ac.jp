'use strict';
(d=>(
	self.root=d.querySelector('script[src$="style.js"]').outerHTML.match(/"(.*)style\.js"/)[1]||'./',
	(w=>d.readyState=='loading'?addEventListener('DOMContentLoaded',w,{once:1}):w())(
		_=>(
			[['afterbegin',`
<style>
	:root{--red:#f00c;--gray:#8884;--white:#fee;--black:#223;--fg:var(--black);--bg:var(--white);color:var(--fg);background-color:var(--bg);}
	@media(prefers-color-scheme:dark){:root{--fg:var(--white);--bg:var(--black);}:link{color:#8cf;}:visited{color:#c8f;}:link:active,:visited:active{color:#f8c;}}
	main{max-width:800px;margin:auto;}

	header{position:sticky;top:8px;display:flex;justify-content:space-between;pointer-events:none;z-index:10;}
	header>a,header>nav>a,main img,iframe,hr,footer{background:var(--gray);backdrop-filter:blur(4px);border-radius:12px;box-sizing:border-box;padding:8px;}
	hr{appearancenone;-webkit-appearance:none;border:none;padding:3px;}
	header a{text-decoration:none;color:var(--fg) !important;}
	header>*{display:flex;align-items:center;pointer-events:auto;}
	header>a *{margin:0;}
	header>a::before{content:"";background:0 0/cover url(${root}fig/koken_icon_large.png);width:64px;height:64px;margin-right:8px;border-radius:4px;}
	header>nav>a{padding:8px;border:8px solid #0000;margin:8px;}
	header>nav>a.active{border-bottom-color:var(--red);}
	@media(max-width:640px){header>a{font-size:0;}header>a::before{margin:unset;}}

	footer{text-align:center;}
	footer img{width:32px;}
</style>
<header>
	<a href="${root}"><div><h4>電気通信大学</h4><h2>工学研究部</h2></div></a>
	<nav>
		<a href="${root}">Home</a>
		<a href="${root}works">Works</a>
		<a href="${root}about.html">About</a>
	</nav>
</header>
			`],['beforeend',`
<footer>
	&copy; 2023 UEC Koken. All rights reserved.
	<div class="social-links">
		<a href="https://twitter.com/ueckoken" target="_blank"><img src="https://api.iconify.design/simple-icons/twitter.svg?color=%23888888" alt="X(旧Twitter)"></a>
		<a href="../${root}" target="_blank"><img src="https://api.iconify.design/octicon/home-fill-24.svg?color=%23888888" alt="WebSite"></a>
	</div>
</footer>
			`]].map(x=>d.body.insertAdjacentHTML(...x)),

			//現在表示されているページを<title>から判別
			[...d.querySelectorAll('header nav>a')].forEach(x=>x.textContent==d.title.split(' ').reverse()[0]&&x.classList.add('active'))
		)
	)
))(document);