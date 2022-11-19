import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBVZq2eMOux0FhsfGaYQkSv3drP0BTI_xI",
    authDomain: "todo-with-database-85c4c.firebaseapp.com",
    projectId: "todo-with-database-85c4c",
    storageBucket: "todo-with-database-85c4c.appspot.com",
    messagingSenderId: "224886822149",
    appId: "1:224886822149:web:937fc668af08201eb9536c",
    measurementId: "G-XDG3WDRCVH"
  };

  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)
  const db = getFirestore(app);

  export {db , auth};