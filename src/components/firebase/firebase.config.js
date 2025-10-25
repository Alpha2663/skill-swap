// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwfeUHf2eMZIa9YVZYslLaW9Vh_M8sL3Q",
  authDomain: "skill-swap-f1e69.firebaseapp.com",
  projectId: "skill-swap-f1e69",
  storageBucket: "skill-swap-f1e69.firebasestorage.app",
  messagingSenderId: "1039460771241",
  appId: "1:1039460771241:web:0c72be0de29e55069210b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;