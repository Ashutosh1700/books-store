// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAXRHAxwEjmI7tcIC5933pScPATBeq_m0c",
    authDomain: "book-inventory-3d703.firebaseapp.com",
    projectId: "book-inventory-3d703",
    storageBucket: "book-inventory-3d703.appspot.com",
    messagingSenderId: "809450123029",
    appId: "1:809450123029:web:b29adaa5b02d39918c831c",
    measurementId: "G-NYB602MC3X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
// export const database = getAuth(app);