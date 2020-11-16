import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAm2flO-ZiMx9fGTwV2K8uHxoLrJDAqwQE",
  authDomain: "facebook-clone-e39b7.firebaseapp.com",
  databaseURL: "https://facebook-clone-e39b7.firebaseio.com",
  projectId: "facebook-clone-e39b7",
  storageBucket: "facebook-clone-e39b7.appspot.com",
  messagingSenderId: "345791312270",
  appId: "1:345791312270:web:c9ff9d1c13520843bdb4df",
  measurementId: "G-GV65TYRZFY",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
