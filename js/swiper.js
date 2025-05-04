const slider = new Swiper(".porfolio__slider.swiper", {
  grid: {
    fill: "row",
    rows: 2,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return index < 3 ? `<span class="${className}"></span>` : "";
    },
  },
  breakpoints: {

    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },

    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
   
  },
});


 