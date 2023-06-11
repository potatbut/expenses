// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzy4qB9I69k3FUqK16MPAxzHANTIfG9N4",
  authDomain: "expense-app-e4da3.firebaseapp.com",
  projectId: "expense-app-e4da3",
  storageBucket: "expense-app-e4da3.appspot.com",
  messagingSenderId: "810208798110",
  appId: "1:810208798110:web:0f9d22f72bb60bc790628f",
  measurementId: "G-NJLNHP20ES"
};

// // Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);