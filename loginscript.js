// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOmh9H1LknGVc3OldPezjaE9nY72lsspc",
  authDomain: "bloomnbay.firebaseapp.com",
  projectId: "bloomnbay",
  storageBucket: "bloomnbay.firebasestorage.app",
  messagingSenderId: "175832064489",
  appId: "1:175832064489:web:9ee689b344a6415a40ab78",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Google Provider
const provider = new GoogleAuthProvider();

// Login Button
document
  .getElementById("googleLogin")
  .addEventListener("click", () => {

    signInWithPopup(auth, provider)
      .then((result) => {

        const user = result.user;

        alert("Welcome " + user.displayName);

        // Redirect after login
        window.location.href = "index.html";

      })
      .catch((error) => {
        console.log(error);
        alert(error.message);
      });

});