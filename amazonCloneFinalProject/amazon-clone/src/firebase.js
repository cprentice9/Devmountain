import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCRPcEy66RnF_U9VKLSwnui3XYhx_vvtII",
  authDomain: "clone-8ace2.firebaseapp.com",
  projectId: "clone-8ace2",
  storageBucket: "clone-8ace2.appspot.com",
  messagingSenderId: "818417644309",
  appId: "1:818417644309:web:4a79f7b060f1aa66d16f1c",
  measurementId: "G-KSCB2BMPX2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
