import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDGY2B54n1y07OClUOpj82YC4vcbukemZE",
  authDomain: "whatsapp-2-615e6.firebaseapp.com",
  projectId: "whatsapp-2-615e6",
  storageBucket: "whatsapp-2-615e6.appspot.com",
  messagingSenderId: "357362047579",
  appId: "1:357362047579:web:cdce4db25c3fcdd35b7d7e",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
// const storage = getStorage();

// Authentication
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const auth = getAuth();
const provider = new GoogleAuthProvider();

// Export
export { db, auth, provider };
