export default class TabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.activedClassName = "ativo";
  }

  activateTab(index) {
    this.tabContent.forEach((item) => {
      item.classList.remove(this.activedClassName);
    });
    this.tabContent[index].classList.add(
      this.activedClassName,
      this.tabContent[index].dataset.anime
    );
  }

  addTabNavEvent() {
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => this.activateTab(index));
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      this.activateTab(0);
      this.addTabNavEvent();
    }
    return this;
  }
}
