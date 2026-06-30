
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

const consejos = [`Evita predecir más bazas de las que realmente puedes controlar`,
  `Usa tus cartas de "huida" para perder bazas intencionalmente`, 
  `Mantente atento al ciclo de victorias`]

  function mostrarConsejos(){
    const lista = document.querySelector("#lista")
    

    if(lista.innerHTML === ""){
    for(let consejo of consejos) {
        const item = document.createElement("li");
        item.textContent = consejo
        lista.appendChild(item); // agrega el elemento li a ul
    }}else{lista.innerHTML = ""}
}

document.querySelector("#mostrar").addEventListener("click",mostrarConsejos);