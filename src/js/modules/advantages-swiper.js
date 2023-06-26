import Swiper, { Pagination } from 'swiper';

export function advantagesSwiper() {
  const advantagesSwiper = document.querySelector('.advantages__swiper');

  if (advantagesSwiper) {
    const advantages = () => {
      if (window.innerWidth <= 768 && advantagesSwiper.dataset.mobile == 'false') {
        var swiper = new Swiper(advantagesSwiper, {
          modules: [Pagination],
          loop: true,
          pagination: {
            el: '.advantages__pagination',
            clickable: true,
          },
          breakpoints: {
            320: {
              slidesPerView: 1,
              slidesPerGroup: 1,
              spaceBetween: 32,
            },
          },
        });
        advantagesSwiper.dataset.mobile = 'true';
      }

      if (window.innerWidth > 768) {
        advantagesSwiper.dataset.mobile = 'false';
        if (advantagesSwiper.classList.contains('swiper-container-initialized')) {
          swiper.destroy();
        }
      }
    };
    advantages();

    window.addEventListener('resize', () => {
      advantages();
    });
  }
}
