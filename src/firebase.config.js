
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSxHpjdHC_fUTX0-VV7QZxoemc1vLSS9Q",
  authDomain: "cypher-grocery-store.firebaseapp.com",
  projectId: "cypher-grocery-store",
  storageBucket: "cypher-grocery-store.appspot.com",
  messagingSenderId: "692427976524",
  appId: "1:692427976524:web:6295f7459437eb74fda9e9"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()