import outsideClick from './outsideclick.js';

export default class DropdownMenu {
  constructor(selector, events) {
    this.dropdownMenus = document.querySelectorAll(selector);
    this.activeClass = 'active';
    this.events = events || ['touchstart', 'click'];
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  activeDropdownMenu(event) {
    event.preventDefault();
    const { currentTarget } = event;
    currentTarget.classList.add(this.activeClass);
    outsideClick(currentTarget, this.events, () => {
      currentTarget.classList.remove(this.activeClass);
    });
  }

  addDropdownMenuEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }


  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenuEvent();
    }
    return this;
  }
}
