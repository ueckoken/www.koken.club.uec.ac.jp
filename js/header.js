'use strict';
(d=>(
	self.root=d.querySelector('script[src$="js/header.js"]').outerHTML.match(/"(.*)js\/header\.js"/)[1]||'./',
	(w=>d.readyState=='loading'?addEventListener('DOMContentLoaded',w,{once:true}):w())(_=>d.body.insertAdjacentHTML('afterbegin',`
<header class="container global-header">
	<a href="./" class="logo">
		<img src="${root}img/koken-logo-with-title.svg" alt="電気通信大学 工学研究部" width="3105" height="815">
	</a>
	<ul class="global-header-social-links">
		<li>
			<a href="https://twitter.com/ueckoken">
				<picture>
					<source media="(prefers-color-scheme: dark)" srcset="${root}img/x-logo-white.png" width="2400" height="2453">
					<img src="${root}img/x-logo-black.png" alt="@ueckoken" width="2400" height="2453">
				</picture>
			</a>
		</li>
		<li>
			<a href="https://www.youtube.com/@kokenuser">
				<img src="${root}img/youtube_social_circle_red.png" alt="工学研究部YouTubeチャンネル" width="128" height="128">
			</a>
		</li>
		<li>
			<a href="https://github.com/ueckoken">
				<picture>
					<source media="(prefers-color-scheme: dark)" srcset="${root}img/github-mark-white.svg" sizes="98">
					<img src="${root}img/github-mark.svg" alt="工学研究部GitHub organization" width="98" height="96">
				</picture>
			</a>
		</li>
	</ul>
	<nav class="global-nav" aria-label="ナビゲーション">
		<ul>
			<li>
				<a href="${root}about.html">
					<span class="title">工学研究部について</span>
					<span class="en-title">About</span>
				</a>
			</li>
			<li>
				<a href="${root}works.html">
					<span class="title">活動</span>
					<span class="en-title">Works</span>
				</a>
			</li>
			<li>
				<a href="${root}clubroom.html">
					<span class="title">部室</span>
					<span class="en-title">Clubroom</span>
				</a>
			</li>
			<li>
				<a href="${root}docs.html">
					<span class="title">資料集</span>
					<span class="en-title">Documents</span>
				</a>
			</li>
			<li>
				<a href="${root}rules.html">
					<span class="title">規約・規則</span>
					<span class="en-title">Rules</span>
				</a>
			</li>
			<li>
				<a href="https://wiki.koken.club.uec.ac.jp/">
					<span class="title">工研Wiki</span>
					<span class="en-title">KokenWiki</span>
				</a>
			</li>
		</ul>
	</nav>
</header>
`))
))(document)
