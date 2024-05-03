// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyjQOuso8YVLjBUbAN0ztcwOXrDNBnvWk",
  authDomain: "organize-my-work.firebaseapp.com",
  projectId: "organize-my-work",
  storageBucket: "organize-my-work.appspot.com",
  messagingSenderId: "317080366747",
  appId: "1:317080366747:web:49b5a6f3ecdd55b3fc203e",
  measurementId: "G-0R15N1WLPD",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
// export const analytics = getAnalytics(app);
