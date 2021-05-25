window.console = window.console || function(t) {};
    if (document.location.search.match(/type=embed/gi)) {
        window.parent.postMessage("resize", "*");
      }
var swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
      invert: false },
  
    // autoHeight: true,
    pagination: {
      el: '.blog-slider__pagination',
      clickable: true } });
  //# sourceURL=pen.js