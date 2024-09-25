import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC8EyulreYsKUpTz_LlkC9uiccSN3P7oV4",
    authDomain: "react-todo-app-1abd5.firebaseapp.com",
    projectId: "react-todo-app-1abd5",
    storageBucket: "react-todo-app-1abd5.appspot.com",
    messagingSenderId: "1050300505467",
    appId: "1:1050300505467:web:b67bfa545572a3711cf1de",
    measurementId: "G-GF7M42WLH2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)