import outsideClick from "./outsideClick.js";

export default class MobileMenu {
  constructor(menuButton, menuList, events) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);

    if (events === undefined) this.events = ["click", "touchstart"];
    else this.events = events;

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.menuList.classList.add("ativo");
    this.menuButton.classList.add("ativo");
    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove("ativo");
      this.menuButton.classList.remove("ativo");
    });
  }

  addMenuMobileEvents() {
    this.events.forEach((item) => {
      this.menuButton.addEventListener(item, this.openMenu);
    });
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvents();
    }
  }
}
