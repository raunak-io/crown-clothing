import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD2iX9vjixvhHUE-oGxpMIT2AbeKEmk6Wk",
  authDomain: "crown-db-5e50d.firebaseapp.com",
  projectId: "crown-db-5e50d",
  storageBucket: "crown-db-5e50d.appspot.com",
  messagingSenderId: "50565577268",
  appId: "1:50565577268:web:44ff4e0d96e9b6ce032861",
  measurementId: "G-WHVV6N83ZR",
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
