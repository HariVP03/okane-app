import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBLxbotAlngv2MNony3q3BZgnop2y4oknM",
  authDomain: "okane-app-c520b.firebaseapp.com",
  projectId: "okane-app-c520b",
  storageBucket: "okane-app-c520b.appspot.com",
  messagingSenderId: "748957507253",
  appId: "1:748957507253:web:98cad946a9e9ae479028fc",
  measurementId: "G-TSJ2YKEVVD",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const authProviders = {
  Google: new GoogleAuthProvider(),
};

export * from "./signin";
