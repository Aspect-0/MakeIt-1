import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyDE9gWyUmmdd5r47FMKBEqhhV40hxZLmXo",
  authDomain: "makeit-1.firebaseapp.com",
  projectId: "makeit-1",
  storageBucket: "makeit-1.appspot.com",
  messagingSenderId: "842982643745",
  appId: "1:842982643745:web:5cca27c800266253e02b60"
};

  initializeApp(firebaseConfig)

  const auth = getAuth()

  export {auth}