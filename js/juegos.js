var juegos = ['megaman8',
              'megamanX',
              'megamanX2',
              'megamanX3',
              'megamanX4',
              'megamanX5',
              'megamanX6',
              'gdarius',
              'metalslugX',
              'bloodyroar',
              'bloodyroar2',
              'digimonrumblearena']

const cargarJuegos = () =>{
  headers = $("#headers");
  banners = $("#banners");
  juegos.forEach( juego =>{


    headers.append(`<li class="btn-headers"><a href="${juego}.html" >${juego}</a></li>`)
    banners.append(`<div class=" ${juego} banner" >
            <div class="container">
                <h1>${juego} </h1>
                <p>Juego del milenio : u </p>
                <a href="${juego}.html" class="btn-new"> Ir a la pagina</a>
            </div>
        </div>`)
  });

}
