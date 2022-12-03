"use strict"

//проверка на тачскрин
var isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android()
			|| isMobile.BlackBerry()
			|| isMobile.iOS()
			|| isMobile.Opera()
			|| isMobile.Windows()
		);
	}
};

if (isMobile.any()) {
	document.body.classList.add('_touch');
} else {
	document.body.classList.add('_pc');
}

// Меню бургер
var iconMenu = document.querySelector('.menu__icon');
var menuBody = document.querySelector('.menu__body');
var hideMain = document.querySelector('.main');
var showFooter = document.querySelector('.footer');
var headerActive = document.querySelector('.header__logo');

if (iconMenu) {

	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_blue');
		showFooter.classList.toggle('_visible');
		hideMain.classList.toggle('_hidden');
	});
}

if (iconMenu) {

	iconMenu.addEventListener("click", function (e) {
		headerActive.classList.toggle('_active');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}