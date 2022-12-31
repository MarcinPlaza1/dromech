document.addEventListener('DOMContentLoaded', () => {
    const hideElement = (element) => {
      element.addEventListener('click', (event) => {
        event.preventDefault();
        element.parentNode.style.display = 'none';
      });
    };
  
    class Dropdown {
      constructor(element) {
        this.element = element;
        this.toggleElement = element.querySelector('.dropdown-toggle');
        this.menuElement = element.querySelector('.dropdown-menu');
        this.toggleElement.addEventListener('click', this.toggle.bind(this));
      }
  
      toggle() {
        const isHidden = this.menuElement.style.display === 'hidden';
  
        Dropdown.hideAll();
  
        if (isHidden) {
          this.menuElement.style.display = '';
          this.toggleElement.classList.add('active');
        }
      }
  
      static hideAll() {
        document.querySelectorAll('.dropdown-menu').forEach((el) => {
          el.style.display = 'none';
        });
        document.querySelectorAll('.dropdown-toggle').forEach((el) => {
          el.classList.remove('active');
        });
      }
    }
  
    document.querySelectorAll('.dropdown').forEach((el) => {
      new Dropdown(el);
    });
  
    document.addEventListener('click', (event) => {
      const target = event.target;
      if (!target.closest('.dropdown')) {
        Dropdown.hideAll();
      }
    });
  });
  
  class TemplateLink {
    constructor(element) {
      this.element = element;
      this.element.addEventListener('click', this.showTemplate.bind(this));
    }
  
    showTemplate() {
      document.querySelectorAll('.template-container > div').forEach((el) => {
        el.style.display = 'none';
      });
      document.querySelector(`#show-${this.element.id}`).style.display = '';
      document.querySelector(`#show-${this.element.id}`).classList.remove('d-none');
    }
  }
  
  document.querySelectorAll('.template-link').forEach((el) => {
    new TemplateLink(el);
  });
  