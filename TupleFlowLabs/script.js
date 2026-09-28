const menuButton = document.querySelector('.menu');
const navLinks = document.querySelector('.nav-links');
const yearNode = document.querySelector('#year');
const currentPage = document.body.dataset.page;

if (yearNode) {
	yearNode.textContent = new Date().getFullYear();
}

if (currentPage) {
	document.querySelectorAll('[data-nav]').forEach((link) => {
		if (link.dataset.nav === currentPage) {
			link.classList.add('active');
			link.setAttribute('aria-current', 'page');
		}
	});
}

if (menuButton && navLinks) {
	menuButton.addEventListener('click', () => {
		const isOpen = navLinks.classList.toggle('mobile-open');
		menuButton.setAttribute('aria-expanded', String(isOpen));
	});
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener('click', (event) => {
		const target = document.querySelector(anchor.getAttribute('href'));

		if (!target) {
			return;
		}

		event.preventDefault();
		navLinks?.classList.remove('mobile-open');
		menuButton?.setAttribute('aria-expanded', 'false');
		target.scrollIntoView({ behavior: 'smooth', block: 'start' });
	});
});