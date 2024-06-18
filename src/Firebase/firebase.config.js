// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD2nGMCYRB-EJwqqXvdML4610iCRHjFSRY",
    authDomain: "trip-tailor.firebaseapp.com",
    projectId: "trip-tailor",
    storageBucket: "trip-tailor.appspot.com",
    messagingSenderId: "532872541870",
    appId: "1:532872541870:web:c2e3d5a5815ea25c291f3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;

// new for trip-tailor
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyD2nGMCYRB-EJwqqXvdML4610iCRHjFSRY",
//   authDomain: "trip-tailor.firebaseapp.com",
//   projectId: "trip-tailor",
//   storageBucket: "trip-tailor.appspot.com",
//   messagingSenderId: "532872541870",
//   appId: "1:532872541870:web:c2e3d5a5815ea25c291f3f"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);