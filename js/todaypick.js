window.addEventListener("load",function(){
    var swiper = new Swiper(".sw-todaypick", {
        // slidesPerView: 1,
        // spaceBetween: 25,
        navigation: {
        nextEl: ".todaypick .sw-next",
        prevEl: ".todaypick .sw-prev",
      },
      loop:true,
      // loop 기본값은 false
      pagination: {
        el: ".sw-todaypick-pg",
        clickable:true,
      },
      breakpoints:{
        // 화면 사이즈가 760 이상일때 작동, 슬라이드가 이상일땐 2개 이하일땐 1개로 보임
        320:{
            slidesPerView: 1,
            spaceBetween: 25,
        },
        760:{
            slidesPerView: 2,
            spaceBetween: 25,
        }
      }
    });
})
