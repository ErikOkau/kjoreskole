// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"  

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFZ_kKXlq1J0j2XTGKL8i-P76QwFg9-rs",
  authDomain: "kjoreskole-e5921.firebaseapp.com",
  databaseURL: "https://kjoreskole-e5921-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "kjoreskole-e5921",
  storageBucket: "kjoreskole-e5921.appspot.com",
  messagingSenderId: "932877689611",
  appId: "1:932877689611:web:0f74a2bc00fc892ef8780e",
  measurementId: "G-33HMLKV5XE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export {
  auth,
  db
}