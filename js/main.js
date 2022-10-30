"use strict";

const menuItems = document.querySelectorAll("#menu-item");

menuItems.forEach((item) => {
  item.addEventListener("click", function addClassActive(event) {
    const otherMenuItems = document.querySelectorAll(".menu-list__item-active");
    otherMenuItems.forEach((item) => {
      item.classList.remove("menu-list__item-active");
    });

    const currItem = event.target.closest("#menu-item");
    currItem.classList.add("menu-list__item-active");
  });
});









const buttonOpenMenu = document.querySelector("#open-menu");

const main = document.querySelector("main");
const menu = document.querySelector("#menu");

buttonOpenMenu.addEventListener("click", function openMenu(event) {
	menu.classList.add("default-position");
	menu.classList.add("showed");
	main.classList.add("shadow");
});

document.addEventListener("click", function closeMenu(event) {
	if (menu.classList.contains("showed") && !event.target.closest("#open-menu")) {
		if (!event.target.closest("#menu")) {
			menu.classList.remove("showed");
			main.classList.remove("shadow");
		}
	}
	if (event.target.closest("#close-menu")) {
		menu.classList.remove("showed");
		main.classList.remove("shadow");
	}
})






window.addEventListener("resize", function (event) {
	const pageWidth = document.documentElement.scrollWidth;
	if (pageWidth > 900) {
		menu.classList.remove("default-position");
		menu.classList.remove("showed");
		main.classList.remove("shadow");
	}
});
