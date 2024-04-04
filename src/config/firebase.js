import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA1F_hNzT3xNv9yQcPAN08yywtbzy6uXQ8",
  authDomain: "react-js-b9fb3.firebaseapp.com",
  projectId: "react-js-b9fb3",
  storageBucket: "react-js-b9fb3.appspot.com",
  messagingSenderId: "422015933181",
  appId:  "1:422015933181:web:5dc7d8e63f677652213c94",
  measurementId: "G-N2131H48TJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
