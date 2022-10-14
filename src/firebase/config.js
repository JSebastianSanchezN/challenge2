import {getAuth} from 'firebase/auth'
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBWUInXx0TW-SxD2EDkxs74zx7W_sVU7hc",
  authDomain: "challenges-3c976.firebaseapp.com",
  projectId: "challenges-3c976",
  storageBucket: "challenges-3c976.appspot.com",
  messagingSenderId: "502721234294",
  appId: "1:502721234294:web:9979333239c60f43e9a657"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth()
const firebaseStorage = getStorage(firebaseApp);
const db = getFirestore()

export {firebaseApp, auth, firebaseStorage, db}