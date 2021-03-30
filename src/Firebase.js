import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBeWg7DUkz5xXNgknwZnQTjr8BiyKEaHx0",
    authDomain: "amiask-f641d.firebaseapp.com",
    projectId: "amiask-f641d",
    storageBucket: "amiask-f641d.appspot.com",
    messagingSenderId: "213755719534",
    appId: "1:213755719534:web:a84a0864561e265ededb7f",
    measurementId: "G-KNNWXRJFR8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export {auth,provider,storage};
  export default db;