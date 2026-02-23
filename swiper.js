const swiper = new Swiper('.swiper_project', {
  slidesPerView: 3,       
  spaceBetween: 20,      
  loop: true,            
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {     
    320: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }
});