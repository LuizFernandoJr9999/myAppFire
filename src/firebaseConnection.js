import firebase, { initializeApp } from "firebase/app";
import "firebase/database";
import "firebase/auth"; // ou quaisquer outros módulos que você esteja usando

//import { initializeApp } from "firebase/app";
//import database from "@react-native-firebase/database";

let firebaseConfig = {
  apiKey: "AIzaSyAUOiwslKfNP6gcHKmDalF8VnOPOZzoxSM",
  authDomain: "meuapp-2a99a.firebaseapp.com",
  databaseURL: "https://meuapp-2a99a-default-rtdb.firebaseio.com",
  projectId: "meuapp-2a99a",
  storageBucket: "meuapp-2a99a.appspot.com",
  messagingSenderId: "132162781962",
  appId: "1:132162781962:web:19bb389989e055daa330f3",
  measurementId: "G-B7J5HCY13X",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default firebase;
