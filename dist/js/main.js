const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu_btn');
const menuBranding = document.querySelector('.menu__branding');
const navbar = document.querySelector('.navbar');
const navItems = document.querySelectorAll('.navbar__item');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
	menuBtn.classList.toggle('close');
	menu.classList.toggle('show');
	menuBranding.classList.toggle('show');
	navbar.classList.toggle('show');
	navItems.forEach((item) => item.classList.toggle('show'));
	showMenu = !showMenu;
}
