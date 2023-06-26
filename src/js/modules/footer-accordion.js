export function footerAccordion() {
  if (window.innerWidth < 460) {
    const accordions = document.querySelectorAll('.footer__accordion-item');

    accordions.forEach((item) => {
      item.addEventListener('click', function () {
        if (this.classList.contains('active')) {
          this.classList.remove('active');
        } else {
          accordions.forEach((el) => {
            el.classList.remove('active');
          });
          this.classList.add('active');
        }
      });
    });
  }
}
