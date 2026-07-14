// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOmh9H1LknGVc3OldPezjaE9nY72lsspc",
  authDomain: "bloomnbay.firebaseapp.com",
  projectId: "bloomnbay",
  storageBucket: "bloomnbay.firebasestorage.app",
  messagingSenderId: "175832064489",
  appId: "1:175832064489:web:9ee689b344a6415a40ab78",
  measurementId: "G-HP6T35LG1Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);