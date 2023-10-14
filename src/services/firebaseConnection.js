//import firebase from "firebase/app";
import firebase, { initializeApp } from "firebase/app";
import "firebase/auth";
import "firebase/database";

let firebaseConfig = {
  apiKey: "AIzaSyA6korm0vE82QzAPB-XyyN656QrRIDOUFQ",
  authDomain: "tarefas-babf6.firebaseapp.com",
  projectId: "tarefas-babf6",
  storageBucket: "tarefas-babf6.appspot.com",
  messagingSenderId: "40646383233",
  appId: "1:40646383233:web:634e3c2facd8f6bbef5f80",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default firebase;
