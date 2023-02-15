import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC2CnhaGEaNfrsZVvWR3YSohMasVCLqxr4",
    authDomain: "chatgpt-plus-msg.firebaseapp.com",
    projectId: "chatgpt-plus-msg",
    storageBucket: "chatgpt-plus-msg.appspot.com",
    messagingSenderId: "368330048489",
    appId: "1:368330048489:web:fb9605caf1fe1183544178"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }