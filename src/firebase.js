import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAIGAqmqeM65ZEwM4ZQfbIdsScqhKWG9Ew",
  authDomain: "reset-app-260c7.firebaseapp.com",
  projectId: "reset-app-260c7",
  storageBucket: "reset-app-260c7.appspot.com",
  messagingSenderId: "138551850374",
  appId: "1:138551850374:web:5efadec4d8f155e7792807",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

export default firebase;
