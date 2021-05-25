import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

  const firebaseConfig = {
    apiKey: "AIzaSyBshjBMJOGWqA5UIpUno6WKDBTSLP3elt4",
    authDomain: "diario-app-7c284.firebaseapp.com",
    projectId: "diario-app-7c284",
    storageBucket: "diario-app-7c284.appspot.com",
    messagingSenderId: "137961946702",
    appId: "1:137961946702:web:046ed3bfb89d59f3facd1f"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}