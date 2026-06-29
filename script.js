
const form = document.querySelector('form');
const nombreUsuario = document.querySelector("#name");

document.querySelector(".btn").addEventListener("click",()=> {
  try{
    if(document.querySelector("#texto").value.trim() === ""){
      throw new Error("Por favor ingrese su opinion antes de enviar");
    }
  }
  catch(e){
    alert(e.message);
  }
})

form.addEventListener('submit', function(event) {
  event.preventDefault(); 
  const name = nombreUsuario.value;
  
  document.querySelector(".agradecimiento").innerText = `Gracias por tu opinion, ${name}`;
});

document.querySelector(".titulo").addEventListener("mouseenter",()=>{
  document.querySelector(".titulo").innerText = "¡RON! ¡RON! ¡RON!";
})

document.querySelector(".titulo").addEventListener("mouseleave",()=>{
  document.querySelector(".titulo").innerText = `Guia para el Juego "Skull King"`;
})

