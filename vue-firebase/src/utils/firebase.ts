// src/utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAZyDZcAJzGdKC65w7U6U3rhhTrY7LrU_4",
  authDomain: "vue-firebase-96df2.firebaseapp.com",
  projectId: "vue-firebase-96df2",
  storageBucket: "vue-firebase-96df2.firebasestorage.app",
  messagingSenderId: "977822476916",
  appId: "1:977822476916:web:f411cf278672173653bf21",
};

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
