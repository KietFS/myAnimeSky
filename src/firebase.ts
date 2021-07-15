import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB-OUBaHdztRGZC5uEqQ8Mj-v8Q8MpxVhg",
  authDomain: "aniskydemo-3b06f.firebaseapp.com",
  projectId: "aniskydemo-3b06f",
  storageBucket: "aniskydemo-3b06f.appspot.com",
  messagingSenderId: "584101353036",
  appId: "1:584101353036:web:5594fa8277186cb66506e9",
  measurementId: "G-H55KZVEQZL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;