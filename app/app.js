import { auth } from "./firebase.js";
import { getAuth, signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

let email = document.getElementById("email");
let password = document.getElementById("password");

let btn = document.getElementById("register").addEventListener("click", signinUser);

function signinUser() {
    signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.uid)
        if (user.uid) {
            history.replaceState(null, null, "index.html");
            window.location.reload();
        }
    })
    .catch((error) => {
      console.log(error);
    });
}
