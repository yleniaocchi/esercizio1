$( () => {
    $("#menu-button").on("click", function () {
      $("#menu, #menu-button").toggleClass("is-active");
    });
  });

  var elem = document.querySelector('.main-carousel');
  var flkty = new Flickity( elem, {
    cellAlign: 'left',
    contain: true
  });
  var flkty = new Flickity( '.main-carousel', {
  });