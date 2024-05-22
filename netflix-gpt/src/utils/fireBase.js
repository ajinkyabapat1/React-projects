// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTxzALeegIRVYY5YzcW5Ad-wMJs_tPgm4",
  authDomain: "neflix-gpt-e1ed4.firebaseapp.com",
  projectId: "neflix-gpt-e1ed4",
  storageBucket: "neflix-gpt-e1ed4.appspot.com",
  messagingSenderId: "476927844172",
  appId: "1:476927844172:web:0e70bef46975db6436f9e9",
  measurementId: "G-EG7837KQC9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();