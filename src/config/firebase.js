import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCULF5xA2UJEdGTgYjzeLPwOfCqTkTASLM",
  authDomain: "clone-6fec6.firebaseapp.com",
  projectId: "clone-6fec6",
  storageBucket: "clone-6fec6.appspot.com",
  messagingSenderId: "927931765300",
  appId: "1:927931765300:web:bea2089cd64f567b5e3061"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);



export { app,auth , db}