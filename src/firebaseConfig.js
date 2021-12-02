import { getAuth, signOut } from "@firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBfweJ6TuBkJZyd1Ml0JEW1DLFuT3w2bA0",
  authDomain: "hyprclub-7ebf6.firebaseapp.com",
  projectId: "hyprclub-7ebf6",
  storageBucket: "hyprclub-7ebf6.appspot.com",
  messagingSenderId: "677732881778",
  appId: "1:677732881778:web:3bffa5ec3d572d3657f9eb",
  measurementId: "G-Z3QRMER9BB",
};
export const firebaseApp = initializeApp(firebaseConfig);

export const logOut = async () => {
  const auth = getAuth();
  await signOut(auth);
};
