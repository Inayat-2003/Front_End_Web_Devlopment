// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeSbJmNY7AaUxch2w3vsOCx6k6RqRzWz8",
  authDomain: "fire-75ae7.firebaseapp.com",
  projectId: "fire-75ae7",
  storageBucket: "fire-75ae7.firebasestorage.app",
  messagingSenderId: "380648053465",
  appId: "1:380648053465:web:9ceb0fe3b981d464787cc8",
  measurementId: "G-Y51JCHETWJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const fireDb = getFirestore (app)