import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyCnfDfK9uRm0udHEXTANc48tActpOYHI0o",
  authDomain: "nfxclonereact.firebaseapp.com",
  projectId: "nfxclonereact",
  storageBucket: "nfxclonereact.appspot.com",
  messagingSenderId: "831560789076",
  appId: "1:831560789076:web:42507636ee7f4573a651c1"
};  

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { app, db, auth };