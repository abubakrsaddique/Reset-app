import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAIGAqmqeM65ZEwM4ZQfbIdsScqhKWG9Ew",
  authDomain: "reset-app-260c7.firebaseapp.com",
  databaseURL: "https://reset-app-260c7-default-rtdb.firebaseio.com",
  projectId: "reset-app-260c7",
  storageBucket: "reset-app-260c7.appspot.com",
  messagingSenderId: "138551850374",
  appId: "1:138551850374:web:5efadec4d8f155e7792807",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const firestore = firebase.firestore();
const auth = firebase.auth();

export { firestore, auth };
export default firebase;
