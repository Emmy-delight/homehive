// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage}  from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "homehive-67f9f.firebaseapp.com",
  projectId: "homehive-67f9f",
  storageBucket: "homehive-67f9f.firebasestorage.app",
  messagingSenderId: "871455610072",
  appId: "1:871455610072:web:b586ad11c5bfd0bac433ad"
};

// Initialize Firebase
const app = getApps().length == 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export {db, storage};
