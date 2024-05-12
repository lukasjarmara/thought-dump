// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCENLG5mUlOV7Y107NKvX2iuPid1_Yi7O0",
  authDomain: "thought-dump-95294.firebaseapp.com",
  databaseURL:
    "https://thought-dump-95294-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "thought-dump-95294",
  storageBucket: "thought-dump-95294.appspot.com",
  messagingSenderId: "30331680715",
  appId: "1:30331680715:web:44761b5dd0651af788284e",
  measurementId: "G-7C0WTFMD9G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
export const auth = getAuth(app);
