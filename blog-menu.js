const nav = document.querySelector("#nav-blog");
const abrir = document.querySelector("#abrir-blog");
const cerrar = document.querySelector("#cerrar-blog");

abrir.addEventListener("click", () => {
  nav.classList.add("visible");
});

cerrar.addEventListener("click", () => {
  nav.classList.remove("visible"); 
});





