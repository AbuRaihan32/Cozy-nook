import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsAH234Op06ZkC8tyvp9ZmZoZp5B8q3uA",
  authDomain: "th-assignment-8ec1b.firebaseapp.com",
  projectId: "th-assignment-8ec1b",
  storageBucket: "th-assignment-8ec1b.appspot.com",
  messagingSenderId: "223116194996",
  appId: "1:223116194996:web:11919f7bc9315cdb0493e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;