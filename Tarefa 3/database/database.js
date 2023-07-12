import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Firebase configuration
const firebaseConfig = {
  apiKey:"AIzaSyDxBxDu2kPG2KPJE-NNbsHsA4_WStSwpn4",
  authDomain: "cstsi-dba-5sem-90926.firebaseapp.com",
  databaseURL: "https://cstsi-dba-5sem-90926-default-rtdb.firebaseio.com",
  projectId: "cstsi-dba-5sem-90926",
  storageBucket: "cstsi-dba-5sem-90926.appspot.com",
  messagingSenderId: "249137749337",
  appId: "1:249137749337:web:2e9707ab7b4b0882ba4048",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export default database;
