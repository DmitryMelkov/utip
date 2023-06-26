export function burger() {
  const burger = document.querySelector('.burger-open-js');
  const menu = document.querySelector('.header__nav-list');

  burger.addEventListener('click', () => {
    menu.classList.toggle('toggle');
  });
}
