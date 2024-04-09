let infos = document.querySelector(".minimizar")

const handleScroll = () => {
    let positionY = window.pageYOffset
    if(positionY > 0) {
        infos.classList.remove('scrolled-up')
        infos.classList.add('scrolled-down')
    } else {
        infos.classList.remove('scrolled-down')
        infos.classList.add('scrolled-up')
    }
}

document.addEventListener('scroll', handleScroll);

var swiperEstruturaNegocios = new Swiper(".list-estrutura", {
    slidesPerView: 1.5,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination-estrutura-negocios",
      clickable: true,
    },
    // Breakpoint options to disable Swiper on desktop
    breakpoints: {
      375: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
        enable: false,
      },
    }
});

var swiperMarcas = new Swiper(".slide-marcas", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".pagination-marcas",
      clickable: true,
    },
    breakpoints: {
        375: {
          slidesPerView: 2.5,
          spaceBetween: 40,
        },
        768: {
            slidesPerView: 3.5,
            spaceBetween: 50,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 80,
            loop: false,
            autoplay: false,
            allowTouchMove: false,
          },
    }
});

var swiperTopicos = new Swiper(".topicos-slide", {
  slidesPerView: 1.5,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination-topicos",
    clickable: true,
  },
  breakpoints: {
    375: {
      slidesPerView: 1.2,
      spaceBetween: 8,
    },
    768: {
      slidesPerView: 2.5,
      spaceBetween: 8,
    },
    993: {
      slidesPerView: 'auto',
      spaceBetween: 0,
      enable: false,
      loop: false,
      autoplay: false,
      allowTouchMove: false,
    },
  }
});

var swiperVantagensArc = new Swiper(".vantagens-acr", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".pagination-VantagensArc",
    clickable: true,
  },
  breakpoints: {
    375: {
      slidesPerView: 1.2,
      spaceBetween: 8,
    },
    768: {
      slidesPerView: 2.5,
      spaceBetween: 8,
    },
    993: {
      slidesPerView: 'auto',
      spaceBetween: 0,
      enable: false,
      loop: false,
      autoplay: false,
      allowTouchMove: false,
    },
  }
});