// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCE8TP-RyGITkgfV7PJ1HWyQUiQpIvHJx8",
  authDomain: "yukdonor-10b99.firebaseapp.com",
  projectId: "yukdonor-10b99",
  storageBucket: "yukdonor-10b99.appspot.com",
  messagingSenderId: "439371223132",
  appId: "1:439371223132:web:ced40aa945642091655699",
  measurementId: "G-4B0Q48DPX4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);