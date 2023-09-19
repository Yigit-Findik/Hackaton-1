// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = initializeApp({
  apiKey: "AIzaSyBu4Nj0d2wfaonlQL42xl9qNwD6dVn4WQ4",
  authDomain: "hackaton-1-sportschool.firebaseapp.com",
  projectId: "hackaton-1-sportschool",
  storageBucket: "hackaton-1-sportschool.appspot.com",
  messagingSenderId: "906204239711",
  appId: "1:906204239711:web:9f1b2d2d54308ea8c888ea",
  measurementId: "G-Y5FSMP3846"
});

const auth = getAuth(firebaseConfig);
const analytics = getAnalytics(firebaseConfig);

// Detect auth state
onAuthStateChanged(auth, user => {
    if(user != null) {
        console.log("logged in!");
    }else {
        console.log("no user")
    }
});