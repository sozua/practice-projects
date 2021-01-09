import outsideClick from "./outsideClick.js";

export default class Dropdown {
  constructor(dropdownMenus) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
    this.events = ["touchstart", "click"];

    this.activeDropdownMenus = this.activeDropdownMenus.bind(this);
  }

  activeDropdownMenus(event) {
    const currentTarget = event.currentTarget;
    event.preventDefault();
    currentTarget.classList.add("ativo");
    outsideClick(currentTarget, this.events, () => {
      currentTarget.classList.remove("ativo");
    });
  }

  addDropdownMenusEvent() {
    this.dropdownMenus.forEach((item) => {
      this.events.forEach((eventClick) => {
        item.addEventListener(eventClick, this.activeDropdownMenus);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) this.addDropdownMenusEvent();
    return this;
  }
}
