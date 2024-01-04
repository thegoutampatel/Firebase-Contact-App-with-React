// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { Firestore, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAT3IzgG7OHW9rQ-WUuqJzF8O6PKdpNEvI",
  authDomain: "vite-contact-b7079.firebaseapp.com",
  projectId: "vite-contact-b7079",
  storageBucket: "vite-contact-b7079.appspot.com",
  messagingSenderId: "820632061708",
  appId: "1:820632061708:web:edc611ace2821ad6136b29"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);