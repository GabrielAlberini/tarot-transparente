import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

console.log(signOut)

const firebaseConfig = {
  apiKey: "AIzaSyCiJ7MX_GhUcNvJVRS2YWEhaMFW5RaHILc",
  authDomain: "tarot-transp.firebaseapp.com",
  projectId: "tarot-transp",
  storageBucket: "tarot-transp.appspot.com",
  messagingSenderId: "505291494830",
  appId: "1:505291494830:web:815b869dc7fc31d000e43f",
  measurementId: "G-PSB75EWP0E"
};


function cerrarSesion() {
  signOut(auth);
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export { cerrarSesion };