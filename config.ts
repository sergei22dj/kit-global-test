type RunMode = 'DEV' | 'PROD';

const RUN_MODE: RunMode = 'PROD';

const BASE_URL = {
  DEV: 'http://localhost:3000/',
  PROD: 'https://kit-global-test-r7jk.vercel.app/',
};

const AUTH0_REDIRECT = BASE_URL[RUN_MODE]; 

export const CONFIG = {
  BASE_URL: BASE_URL,
  FIREBASE: {
    apiKey: "AIzaSyDwCrIH1AktjrnfPjfO7ZXL9uMp_CELBLY",
    authDomain: "kit-global-test.firebaseapp.com",
    projectId: "kit-global-test",
    storageBucket: "kit-global-test.appspot.com",
    messagingSenderId: "859341054453",
    appId: "1:859341054453:web:f091ed2792cc1551fb00bc",
    measurementId: "G-4ZD4F92WJM"
  },
  AUTH0: {
    domain: "dev-68z2y7mawqceinob.us.auth0.com",
    clientId: "rVtNNsR7AxUuqbyU1WKm2tkvSFmC3J2O",
    redirect: AUTH0_REDIRECT, 
  },
} as const;

