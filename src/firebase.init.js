// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA82B0iBAY65VW1qBlxVM5sK1aVBAIhASQ",
  authDomain: "assignment-10-3d37f.firebaseapp.com",
  projectId: "assignment-10-3d37f",
  storageBucket: "assignment-10-3d37f.appspot.com",
  messagingSenderId: "34903564356",
  appId: "1:34903564356:web:63a5b627459b1ebc511c11",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
