import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyAUEtHS5ylIVbQBNq4qeuNm7ilf7TP6aCM",
    authDomain: "puzzle-6e498.firebaseapp.com",
    projectId: "puzzle-6e498",
    storageBucket: "puzzle-6e498.appspot.com",
    messagingSenderId: "252249186474",
    appId: "1:252249186474:web:f9d5c5bdacc442aa10b0d3",
    measurementId: "G-SMPHRGWMJC"
  };
const app = initializeApp(firebaseConfig);
  export const auth=getAuth(app);
  export const db = getFirestore(app);