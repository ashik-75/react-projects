// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAar4mjed8VpBOme4FStyJkKrCtxEfPewc",
  authDomain: "react-job-auth.firebaseapp.com",
  projectId: "react-job-auth",
  storageBucket: "react-job-auth.appspot.com",
  messagingSenderId: "719741709212",
  appId: "1:719741709212:web:8c62be7b6193cf4284f659",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();
