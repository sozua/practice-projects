export default class Accordion {
  constructor(accordionList) {
    this.accordionList = document.querySelectorAll(accordionList);
    this.activedClassName = "ativo";
  }

  toggleAccordion(item) {
    item.classList.toggle(this.activedClassName);
    item.nextElementSibling.classList.toggle(this.activedClassName);
  }

  addAccordionEvent() {
    this.accordionList.forEach((accordionItem) => {
      accordionItem.addEventListener("click", () => {
        this.toggleAccordion(accordionItem);
      });
    });
  }

  init() {
    if (this.accordionList.length) {
      this.toggleAccordion(this.accordionList[0]);
      this.addAccordionEvent();
    }
    return this;
  }
}
