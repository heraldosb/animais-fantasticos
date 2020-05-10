import debounce from './debounce.js';

export default class AnimacaoScroll {
  constructor(selector) {
    this.sections = document.querySelectorAll(selector);
    this.windowMetade = window.innerHeight * 0.6;
    this.activeClass = 'ativo';
    this.checkDistance = debounce(this.checkDistance.bind(this), 200);
  }

  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.windowMetade),
      };
    });
  }

  checkDistance() {
    this.distance.forEach((section) => {
      if (window.pageYOffset > section.offset) {
        section.element.classList.add(this.activeClass);
      } else if (section.element.classList.contains(this.activeClass)) {
        section.element.classList.remove(this.activeClass);
      }
    });
  }

  animaScroll() {
    this.sections.forEach((section) => {
      this.addClassAtivo(section);
    });
  }

  addEventScroll() {
    window.addEventListener('scroll', this.checkDistance);
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      this.addEventScroll();
    }
    return this;
  }

  stop() {
    window.removeEventListener('scroll', this.checkDistance);
  }
}
