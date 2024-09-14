// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsrZHNGWzGrDrznNIeuIIHMrvTKi7v2b8",
  authDomain: "netflix-clone-21876.firebaseapp.com",
  projectId: "netflix-clone-21876",
  storageBucket: "netflix-clone-21876.appspot.com",
  messagingSenderId: "272948713103",
  appId: "1:272948713103:web:74e427af9a1269e14b42fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getFirestore();

export {app, auth, database};