
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9dB0gGKyF0kQsDdajwaQlGYwU_T8uc-U",
  authDomain: "cypher-store.firebaseapp.com",
  projectId: "cypher-store",
  storageBucket: "cypher-store.appspot.com",
  messagingSenderId: "912175579927",
  appId: "1:912175579927:web:7278301b470d014301ed52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase
initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore()