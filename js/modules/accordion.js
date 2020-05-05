export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = 'ativo';
  }


  toogleAccordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  addAccodionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener('click', () => this.toogleAccordion(item));
    });
  }

  init() {
    if (this.accordionList.length) {
      this.toogleAccordion(this.accordionList[0]);
      this.addAccodionEvent();
    }
    return this;
  }
}
