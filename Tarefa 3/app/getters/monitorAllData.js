import database from "../../database/database.js";
import { ref, onChildChanged } from "firebase/database";

const dbRef = ref(database, "produtos");

onChildChanged(dbRef, (snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("Dados não encontrados!");
  }
  process.exit();
})
