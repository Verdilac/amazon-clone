import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-_qe1tZLXJccbNztYjMaibYX3G3Z1s_0",
  authDomain: "fir-84937.firebaseapp.com",
  databaseURL: "https://fir-84937.firebaseio.com",
  projectId: "fir-84937",
  storageBucket: "fir-84937.appspot.com",
  messagingSenderId: "692022410928",
  appId: "1:692022410928:web:0eaaa6f338b22b5cc80575",
  measurementId: "G-0GPLFQ26VT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
