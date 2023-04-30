 
var swiper = new Swiper(".slide-content", {
    slidesPerView: 4,
    spaceBetween: 25,
    loop: true,
    autoplay: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
        1250: {
          slidesPerView: 4,
      },
    },
  });


    var swipers = new Swiper(".mySwipers", {
      spaceBetween: 30,
      loop: true,
      autoplay: true,
      effect: "fade",
  
    });

    var swiperog = new Swiper(".mySwiperog", {
      slidesPerView: 4,
      loop: true,
      autoplay: true,
      centeredSlides: true,
      spaceBetween: 15,
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
