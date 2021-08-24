import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCyeUCQsz-IddFP26L2gC2jZ1u6OeJl3Rc",
  authDomain: "crwn-db-2021-12a17.firebaseapp.com",
  projectId: "crwn-db-2021-12a17",
  storageBucket: "crwn-db-2021-12a17.appspot.com",
  messagingSenderId: "737859032058",
  appId: "1:737859032058:web:4513c451371e774a0d4a43",
  measurementId: "G-J8RP5ZMFLB",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
