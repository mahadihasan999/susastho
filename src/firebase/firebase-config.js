import { initializeApp } from "firebase/app";

// TODO: Replace the following with your app's Firebase project configuration
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC-JDqtSeBcQn2cLFeJ5pHD3bjUP5rjMFQ",
  authDomain: "home-pros-2c993.firebaseapp.com",
  projectId: "home-pros-2c993",
  storageBucket: "home-pros-2c993.appspot.com",
  messagingSenderId: "17531021335",
  appId: "1:17531021335:web:f0289e8a47f29910ac9452",
};

const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);
