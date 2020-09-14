import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage"
import firebaseConfig from "./firebaseConfig";
firebase.initializeApp(firebaseConfig);

// utils
const db = firebase.firestore();
const auth = firebase.auth();
const firebaseStorage = firebase.storage();

const storyBooks = db.collection("storybooks");
const coloringBooks = db.collection("coloringbooks");

// export utils/refs
export { db, auth, firebaseStorage };
