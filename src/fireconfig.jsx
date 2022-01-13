 
import { initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore";
 
const firebaseConfig = {
  apiKey: "AIzaSyA1dDG1yZ8Kc6k5GWhlumlo2EpJ7ExNrLs",
  authDomain: "firecommerce-a4310.firebaseapp.com",
  projectId: "firecommerce-a4310",
  storageBucket: "firecommerce-a4310.appspot.com",
  messagingSenderId: "1044902564273",
  appId: "1:1044902564273:web:679a360cc63f1c8d48ed90",
  measurementId: "G-V29S2R0HN1"
};

 
const app = initializeApp(firebaseConfig);
 
const fireDB= getFirestore(app)

export default fireDB;