// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const config = {
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    appId: process.env.REACT_APP_FIREBASE_APPID,
    authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASEURL,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
    projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID
};

let instance = null;
// Initialize Firebase
export default function getFirebase() {
    if (instance) return instance;
    instance = initializeApp(config);
    return instance;
}