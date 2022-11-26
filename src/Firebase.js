



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDuGZsa7VKsdBjI9tme_dZBntdUa7z8fk8",
    authDomain: "winkit-c590d.firebaseapp.com",
    projectId: "winkit-c590d",
    storageBucket: "winkit-c590d.appspot.com",
    messagingSenderId: "556976067052",
    appId: "1:556976067052:web:640d428d2d91f601a0f0c9",
    measurementId: "G-VJ8BX4FTEQ"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
auth.languageCode = 'it';
window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
    'size': 'invisible',
    'callback': (response) => {
      // reCAPTCHA solved, allow signInWithPhoneNumber.
      onSignInSubmit();
    }
  }, auth);

