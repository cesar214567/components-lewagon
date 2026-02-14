// Mapa: nombre del juego -> URL de retrogames
const juegosMap = {
  megaman8: "https://www.retrogames.cc/embed/40233-mega-man-8.html",
  megamanX: "https://www.retrogames.cc/snes-games/megaman-x-usa.html",
  megamanX2: "https://www.retrogames.cc/embed/40192-mega-man-x2.html",
  megamanX3: "https://www.retrogames.cc/embed/40193-mega-man-x3.html",
  megamanX4: "https://www.retrogames.cc/embed/40194-mega-man-x4.html",
  megamanX5: "https://www.retrogames.cc/embed/40195-mega-man-x5.html",
  megamanX6: "https://www.retrogames.cc/embed/40196-mega-man-x6.html",
  gdarius: "https://www.retrogames.cc/embed/41603-g-darius.html",
  metalslugX: "https://www.retrogames.cc/embed/40285-metal-slug-x.html",
  bloodyroar: "https://www.retrogames.cc/embed/41622-bloody-roar.html",
  bloodyroar2: "https://www.retrogames.cc/embed/41623-bloody-roar-2.html",
  digimonrumblearena: "https://www.retrogames.cc/embed/41660-digimon-rumble-arena.html"
};

// Cargar headers y dejar banners vacío
const cargarJuegos = () => {
  const headers = $("#headers");
  const banners = $("#banners");

  headers.html("");
  banners.html(""); // vacío al cargar la página

  Object.keys(juegosMap).forEach(juego => {
    headers.append(`
      <li class="btn-headers">
        <a href="#" data-juego="${juego}">${juego}</a>
      </li>
    `);
  });
};

// Evento click para cargar el juego
$(document).on("click", ".btn-headers a", function (e) {
  e.preventDefault();

  const juego = $(this).data("juego");
  const url = juegosMap[juego];

  $("#banners").html(`
    <div class="">
      <iframe
        src="${url}"
        width="960"
        height="720"
        frameborder="no"
        allowfullscreen
        webkitallowfullscreen
        mozallowfullscreen
        scrolling="no">
      </iframe>
    </div>
  `);
});

// Inicialización
$(document).ready(() => {
  cargarJuegos();
});
