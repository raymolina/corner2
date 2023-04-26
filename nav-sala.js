const nav = document.querySelector("#nav-sala");
const abrir = document.querySelector("#abrir-sala");
const cerrar = document.querySelector("#cerrar-sala");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})


cerrar.addEventListener("click", () => {
    nav.classList.remove("visible"); 
}) 