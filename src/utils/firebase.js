// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPEZeXIQaiH5vDPNZxph_BqHl7x7Of8eE",
  authDomain: "netflixgpt-sds.firebaseapp.com",
  projectId: "netflixgpt-sds",
  storageBucket: "netflixgpt-sds.appspot.com",
  messagingSenderId: "356756796079",
  appId: "1:356756796079:web:c032f5e85bf8c632de5a5a",
  measurementId: "G-SJJSW6K99Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);