import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyvqhEx9sWbYVy5FBQyL2moVzTUASiRoQ",
  authDomain: "lesson-2661e.firebaseapp.com",
  projectId: "lesson-2661e",
  storageBucket: "lesson-2661e.firebasestorage.app",
  messagingSenderId: "78967024262",
  appId: "1:78967024262:web:797f7617a53dc4cfac3f07",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth
export const auth = getAuth(app);
export const db = getFirestore();
