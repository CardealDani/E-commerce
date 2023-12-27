import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBY2N5hNyaHiAWWxgWu7HfdBNw6s-KXWV4",
    authDomain: "e-commerce-lk-infortech.firebaseapp.com",
    projectId: "e-commerce-lk-infortech",
    storageBucket: "e-commerce-lk-infortech.appspot.com",
    messagingSenderId: "824306165512",
    appId: "1:824306165512:web:34653f7e1e47adff14eebd"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);
const auth = getAuth(app)

export { db, storage, auth };