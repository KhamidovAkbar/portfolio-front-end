// FOR HAMBURGER MENU
// Select DOM Items
const menuBtn = document.querySelector('.menu_btn');
const menu = document.querySelector('nav');
const navContainer = document.querySelector('.nav-items');
const items = document.querySelectorAll('.item');
const id = document.querySelector('.id');
const footer = document.querySelector('footer');

function toggleMenu(x) {
	x.classList.toggle('change');
	menu.classList.toggle('show');
	navContainer.classList.toggle('show');
	// id.classList.toggle('show');
	// footer.classList.toggle('show');
	items.forEach((item) => item.classList.toggle('show'));
}

// Typewriter effect

document.addEventListener('DOMContentLoaded', function(event) {
	// array with texts to type in typewriter
	var dataText = [ 'Web Developer', 'UI/UX Designer', 'Freelancer', 'CS Student' ];

	// type one text in the typwriter
	// keeps calling itself until the text is finished
	function typeWriter(text, i, fnCallback) {
		// chekc if text isn't finished yet
		if (i < text.length) {
			// add next character to h1
			document.querySelector('#title').innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

			// wait for a while and call this function again for next character
			setTimeout(function() {
				typeWriter(text, i + 1, fnCallback);
			}, 90);
		} else if (typeof fnCallback == 'function') {
			// text finished, call callback if there is a callback function
			// call callback after timeout
			setTimeout(fnCallback, 1500);
		}
	}
	// start a typewriter animation for a text in the dataText array
	function StartTextAnimation(i) {
		if (typeof dataText[i] == 'undefined') {
			setTimeout(function() {
				StartTextAnimation(0);
			}, 1);
		}
		// check if dataText[i] exists
		if (i < dataText[i].length) {
			// text exists! start typewriter animation
			typeWriter(dataText[i], 0, function() {
				// after callback (and whole text has been animated), start next text
				StartTextAnimation(i + 1);
			});
		}
	}
	// start the text animation
	StartTextAnimation(0);
});
