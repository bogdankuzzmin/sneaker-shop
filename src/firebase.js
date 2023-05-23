// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsOlW5djF9VZbrXqGw28r-dPWR61IFJLo",
  authDomain: "sneakers-28a90.firebaseapp.com",
  projectId: "sneakers-28a90",
  storageBucket: "sneakers-28a90.appspot.com",
  messagingSenderId: "848098970508",
  appId: "1:848098970508:web:122b6e2df41df0d9f4a4a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
