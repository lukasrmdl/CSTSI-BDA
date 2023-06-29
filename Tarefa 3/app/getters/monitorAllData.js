import database from "../../database/database.js";
import { ref, onValue } from "firebase/database";

const dbRef = ref(database, "produtos");

onValue(dbRef, (snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("Dados não encontrados!");
  }
})
