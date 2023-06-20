import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDc2V-4R_jbS29JTDFE41Rkr-kdXO5eDuo",
  authDomain: "surokkha-health.firebaseapp.com",
  projectId: "surokkha-health",
  storageBucket: "surokkha-health.appspot.com",
  messagingSenderId: "483106897367",
  appId: "1:483106897367:web:a211341c65b4b69a731f92",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
