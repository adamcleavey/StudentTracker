// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmVODDtFkhVeZMEDpllkze_ajUfBdWTPI",
  authDomain: "studenttracker-509a5.firebaseapp.com",
  projectId: "studenttracker-509a5",
  storageBucket: "studenttracker-509a5.appspot.com",
  messagingSenderId: "902202323502",
  appId: "1:902202323502:web:76cf2798165a285c46e5bf",
  measurementId: "G-S9TBK4LV6W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore();