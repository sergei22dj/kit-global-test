import { initializeApp } from "firebase/app";
import 'firebase/firestore'
import { getFirestore } from "firebase/firestore";
import { CONFIG } from "../../config";
import { getStorage } from "firebase/storage";

const firebaseConfig = CONFIG.FIREBASE;

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const fireStorage = getStorage(app)