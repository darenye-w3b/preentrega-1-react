import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBpSX6w7KdN6JMmin_u3E3twY2dhQmvyyM",
    authDomain: "react-ecommerce54020.firebaseapp.com",
    projectId: "react-ecommerce54020",
    storageBucket: "react-ecommerce54020.appspot.com",
    messagingSenderId: "510585089567",
    appId: "1:510585089567:web:b90a3665519cfead6c6f2a"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)