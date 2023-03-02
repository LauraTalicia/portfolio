import { GoogleAuthProvider } from "firebase/auth";

// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZUoK1XvH-a0q7cWYO0MaTIcRVODqe1ec",
  authDomain: "laurasportfolio-4c2d8.firebaseapp.com",
  databaseURL: "https://laurasportfolio-4c2d8-default-rtdb.firebaseio.com",
  projectId: "laurasportfolio-4c2d8",
  storageBucket: "laurasportfolio-4c2d8.appspot.com",
  messagingSenderId: "771831515188",
  appId: "1:771831515188:web:94090aeba1b97432fee261",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
const provider = new GoogleAuthProvider();
