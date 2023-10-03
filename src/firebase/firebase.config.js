// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7yqaiP6WhLE6gvSfNM6iZuMaFVwpz1dE",
  authDomain: "authentication-process-6b67d.firebaseapp.com",
  projectId: "authentication-process-6b67d",
  storageBucket: "authentication-process-6b67d.appspot.com",
  messagingSenderId: "163162381458",
  appId: "1:163162381458:web:3e685d6578f25a6adc5a4b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;