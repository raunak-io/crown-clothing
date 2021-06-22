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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firebase.firestore().doc(`user/${userAuth.uid}`);
  const snapShot = await userRef.get();
  console.log(snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (err) {
      console.log("error while creating user ->", err);
    }
  }

  return userRef;
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
