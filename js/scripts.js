const miEnlace = document.getElementById("regalo_29");
miEnlace.addEventListener("click", function(event) {
  event.preventDefault();
});

function cambiarImagen() {
  const imagen = document.querySelector('.dino-imagen');
  const texto = document.querySelector('#texto');
  imagen.setAttribute('src', 'img/regalo_4/regalo4_5.png');
 
  texto.textContent = '¡Habia mas prosciutto! el cuchillo era para cortar un trozo mas... bueno nadie los extrañara de todas formas';
}

function abrirModal() {
  // Restaurar la imagen y el texto original
  const imagen = document.querySelector('.dino-imagen');
  const texto = document.querySelector('#texto');
  imagen.setAttribute('src', 'img/regalo_4/regalo4_1.jpg');
  texto.textContent = 'lo siento... estos pequeños se lo comieron todo. Pero !Alabado sea el prosciutto¡';
  
 
}

const video = document.getElementById('video')
video.play()