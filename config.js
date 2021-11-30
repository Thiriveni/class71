import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCXOw_3_go9wANsY6Brdc2F3OIpaGRthcg",
    authDomain: "wily-4e632.firebaseapp.com",
    projectId: "wily-4e632",
    storageBucket: "wily-4e632.appspot.com",
    messagingSenderId: "858460747456",
    appId: "1:858460747456:web:57c6ed7be4f2abc5cc1f25"
  };

  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();