export default class AnimacaoScroll {
  constructor(selector) {
    this.sections = document.querySelectorAll(selector);
    this.windowMetade = window.innerHeight * 0.6;
    this.activeClass = 'ativo';
    this.animaScroll = this.animaScroll.bind(this);
  }

  addClassAtivo(section) {
    const sectionTop = section.getBoundingClientRect().top;
    const isSectionVisible = (sectionTop - this.windowMetade) < 0;
    if (isSectionVisible) {
      section.classList.add(this.activeClass);
    } else if (section.classList.contains(this.activeClass)) {
      section.classList.remove(this.activeClass);
    }
  }

  animaScroll() {
    this.sections.forEach((section) => {
      this.addClassAtivo(section);
    });
  }

  addEventScroll() {
    window.addEventListener('scroll', this.animaScroll);
  }

  init() {
    if (this.sections.length) {
      this.animaScroll();
      this.addEventScroll();
    }
    return this;
  }
}
