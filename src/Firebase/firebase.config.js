// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvbY2-aWtflvPKl8Hx1cY5_aZERWCFLtY",
  authDomain: "contesthub-e5119.firebaseapp.com",
  projectId: "contesthub-e5119",
  storageBucket: "contesthub-e5119.appspot.com",
  messagingSenderId: "1014188558802",
  appId: "1:1014188558802:web:5ac6303f3f630b5bae200b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
