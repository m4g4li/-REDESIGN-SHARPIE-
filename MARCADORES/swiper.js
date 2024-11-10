var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1, // Muestra solo una slide en pantallas grandes por defecto
    spaceBetween: 0, // Sin espacio entre slides en pantallas grandes
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 0,
      modifier: 1,
      slideShadows: false,
    },
    loop: true,
    breakpoints: {
        991: { // En pantallas de 768px o más
            slidesPerView: 3, // Muestra tres slides en pantallas grandes
            spaceBetween: 20, // Espacio entre slides en pantallas grandes
        },
    },
});
