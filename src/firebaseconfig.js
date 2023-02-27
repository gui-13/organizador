import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";


// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  // ...
  // The value of `databaseURL` depends on the location of the database
  apiKey: "AIzaSyDkPHJVUa0jnLf8RPd18UU3h7eM-vqijxo",
  authDomain: "organizador-a2352.firebaseapp.com",
  projectId: "organizador-a2352",
  storageBucket: "organizador-a2352.appspot.com",
  messagingSenderId: "927751110581",
  appId: "1:927751110581:web:f20ac01b424e7a046de3fc",
  databaseURL: "https://organizador-a2352-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);
export const auth = getAuth(app)




