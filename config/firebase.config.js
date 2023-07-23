import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAppEFj_cEJH98ES46bxi_s-m6N1rp4908",
  authDomain: "chat-4649f.firebaseapp.com",
  projectId: "chat-4649f",
  storageBucket: "chat-4649f.appspot.com",
  messagingSenderId: "606992969539",
  appId: "1:606992969539:web:56ebfc29451f94e9c189f6",
};

const app = getApp.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firebaseAuth = getAuth(app);
const firestoreDB = getFirestore(app);

export { app, firebaseAuth, firestoreDB };
