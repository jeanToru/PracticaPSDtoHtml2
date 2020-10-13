//Este proceso llama al div que contiene la ventana
const ventanaModal = document.getElementsByClassName("modal");

//Este proceso llama al boton para abrir el modal del peronaje Nissa.
const boton = document.getElementsByClassName("botton");

//Botton de cierre de ventana modal 
const cierre = document.getElementsByClassName("cerrar")[0];

// Se oculta la ventana modal desde JS 
ventanaModal[0].classList.add('ocultar');

//Muesta el Modal
boton[0].addEventListener('click',()=>{
    ventanaModal[0].classList.remove('ocultar');
})
  //cierra el modal cuando se toca el boton de cierre.
cierre.addEventListener('click',()=>{
    ventanaModal[0].classList.add('ocultar');
})