const anchors = document.querySelectorAll('a[href*="#"]')

anchors.forEach(anchor => {
	anchor.addEventListener('click', (event) => {
		event.preventDefault();
		const anchorID = anchor.getAttribute('href')
		document.querySelector(anchorID).scrollIntoView({
			behavior: "smooth",
			block: "start",
		})
	})
})

