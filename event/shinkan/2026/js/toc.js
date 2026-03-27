(() => {
	const headings = Array.from(document.querySelectorAll(" main h2, main h3")); const
		tocList = document.getElementById("toc-list"); const tocPanel = document.getElementById("toc-panel"); const
			tocFab = document.getElementById("toc-fab"); const tocBackdrop = document.getElementById("toc-backdrop"); if
		(!headings.length || !tocList || !tocPanel || !tocFab || !tocBackdrop) { return; } const slugify = (text, index) => {
			const base = text
				.trim()
				.toLowerCase()
				.replace(/\s+/g, "-")
				.replace(/[^\w\-ぁ-んァ-ン一-龠]/g, "")
			return base || `section-${index + 1}`;
		};

	headings.forEach((heading, index) => {
		if (!heading.id) {
			const seed = slugify(heading.textContent || "", index);
			let candidate = seed;
			let suffix = 2;
			while (document.getElementById(candidate)) {
				candidate = `${seed}-${suffix}`;
				suffix += 1;
			}
			heading.id = candidate;
		}

		const link = document.createElement("a");
		link.href = `#${heading.id}`;
		link.textContent = heading.textContent || `Section ${index + 1}`;
		if (heading.tagName.toLowerCase() === "h3") {
			link.classList.add("toc-subitem");
		}
		link.addEventListener("click", closeToc);
		tocList.appendChild(link);
	});

	const openToc = () => {
		tocPanel.hidden = false;
		tocBackdrop.hidden = false;
		requestAnimationFrame(() => {
			tocPanel.classList.add("is-open");
			tocBackdrop.classList.add("is-open");
		});
		tocFab.setAttribute("aria-expanded", "true");
	};

	function closeToc() {
		tocPanel.classList.remove("is-open");
		tocBackdrop.classList.remove("is-open");
		tocFab.setAttribute("aria-expanded", "false");
		window.setTimeout(() => {
			if (tocFab.getAttribute("aria-expanded") === "false") {
				tocPanel.hidden = true;
				tocBackdrop.hidden = true;
			}
		}, 200);
	}

	tocFab.addEventListener("click", () => {
		if (tocFab.getAttribute("aria-expanded") === "true") {
			closeToc();
			return;
		}
		openToc();
	});

	tocBackdrop.addEventListener("click", closeToc);
	document.addEventListener("keydown", (event) => {
		if (event.key === "Escape") {
			closeToc();
		}
	});
})();