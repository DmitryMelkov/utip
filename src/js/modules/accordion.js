export function accordionFunc() {
  const accordions = document.querySelectorAll('.accordion__item');

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

  // const accordion = document.querySelectorAll('.accordion__item');

  // for (let i = 0; i < accordion.length; i++) {
  //   accordion[i].addEventListener('click', function () {
  //     this.classList.toggle('active');
  //   });
  // }
}
