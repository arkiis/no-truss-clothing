import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB8FQOUeY3KNR13HAYNNXc8JhroapGHda4",
  authDomain: "no-truss-clothing.firebaseapp.com",
  databaseURL: "https://no-truss-clothing.firebaseio.com",
  projectId: "no-truss-clothing",
  storageBucket: "",
  messagingSenderId: "122275942720",
  appId: "1:122275942720:web:2fdc2f1d2b59cba3"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
