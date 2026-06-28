
const form = document.querySelector('form');
const nombreUsuario = document.querySelector("#name");

form.addEventListener('submit', function(event) {
  event.preventDefault(); 
  const name = nombreUsuario.value;
  
  document.querySelector(".agradecimiento").innerText = `Gracias por tu opinion, ${name}`;
});