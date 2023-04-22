// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBU0QGwKavYCwlmtHaRKEga9UquSEzgyEU",
  authDomain: "ghardhoondho-94485.firebaseapp.com",
  projectId: "ghardhoondho-94485",
  storageBucket: "ghardhoondho-94485.appspot.com",
  messagingSenderId: "416420636783",
  appId: "1:416420636783:web:707494f679dcdc5137859a"
};

// Initialize Firebase

const app=initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
// export const db=getFireStore();