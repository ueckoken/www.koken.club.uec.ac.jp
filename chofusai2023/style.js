'use strict';
(d=>(
	self.root=d.querySelector('script[src$="style.js"]').outerHTML.match(/"(.*)style\.js"/)[1]||'./',
	(w=>d.readyState=='loading'?addEventListener('DOMContentLoaded',w,{once:1}):w())(
		_=>(
			[['afterbegin',`
<header>
	<nav>
		<a href="${root}" class="image1" style="padding:0;margin:0;"><img src="${root}fig/logo.png"></a>
		<a href="${root}" class="image2" style="padding:0;margin:0;"><img src="${root}fig/koken_icon_large.png"></a>
		<ul class="internal-links">
			<li><a href="${root}">Home</a></li>
			<li><a href="${root}works">Works</a></li>
			<li><a href="${root}about.html">About</a></li>
		</ul>
	</nav>
</header>
			`],['beforeend',`
<footer>
	&copy; 2023 UEC Koken. All rights reserved.
	<div class="social-links">
		<a href="https://twitter.com/ueckoken" target="_blank">
			<span class="sr-only">X(旧Twitter)</span>
			<svg role="img" width="32" height="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>Twitter</title><path d="M21.543 7.104c.015.211.015.423.015.636 0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 0 1 0 19.539a9.88 9.88 0 0 0 7.287-2.041 4.93 4.93 0 0 1-4.6-3.42 4.916 4.916 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 9.167v-.062a4.887 4.887 0 0 0 2.235.616A4.928 4.928 0 0 1 1.67 3.148 13.98 13.98 0 0 0 11.82 8.292a4.929 4.929 0 0 1 8.39-4.49 9.868 9.868 0 0 0 3.128-1.196 4.941 4.941 0 0 1-2.165 2.724A9.828 9.828 0 0 0 24 4.555a10.019 10.019 0 0 1-2.457 2.549z"/></svg>
		</a>
		<a href="../${root}" target="_blank">
			<span class="sr-only">WebSite</span>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="currentColor"><path d="M12.97 2.59a1.5 1.5 0 0 0-1.94 0l-7.5 6.363A1.5 1.5 0 0 0 3 10.097V19.5A1.5 1.5 0 0 0 4.5 21h4.75a.75.75 0 0 0 .75-.75V14h4v6.25c0 .414.336.75.75.75h4.75a1.5 1.5 0 0 0 1.5-1.5v-9.403a1.5 1.5 0 0 0-.53-1.144l-7.5-6.363Z"></path></svg>
		</a>
	</div>
</footer>
			`]].map(x=>d.body.insertAdjacentHTML(...x)),

			//現在表示されているページを<title>から判別
			[...d.querySelectorAll('header li>a')].forEach(x=>x.textContent==d.title.split(' ').reverse()[0]&&x.classList.add('active'))
		)
	)
))(document);
