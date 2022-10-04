import { cerrarSesion } from "./firebase.js";

let btnClose = document.getElementById("btn-close").addEventListener("click", closeSection);

function closeSection() {
    cerrarSesion();
    history.replaceState(null, null, "login.html");
    window.location.reload();
}

