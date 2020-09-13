import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_jE1GoI3AgnDtYR58P-gjErwEpGZ5UtY",
  authDomain: "clone-b9929.firebaseapp.com",
  databaseURL: "https://clone-b9929.firebaseio.com",
  projectId: "clone-b9929",
  storageBucket: "clone-b9929.appspot.com",
  messagingSenderId: "873365064651",
  appId: "1:873365064651:web:59ad7472881a21f41fc44e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
