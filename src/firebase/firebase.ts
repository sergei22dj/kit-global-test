import { initializeApp } from "firebase/app";
import 'firebase/firestore'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDwCrIH1AktjrnfPjfO7ZXL9uMp_CELBLY",
  authDomain: "kit-global-test.firebaseapp.com",
  projectId: "kit-global-test",
  storageBucket: "kit-global-test.appspot.com",
  messagingSenderId: "859341054453",
  appId: "1:859341054453:web:f091ed2792cc1551fb00bc",
  measurementId: "G-4ZD4F92WJM"
};

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)