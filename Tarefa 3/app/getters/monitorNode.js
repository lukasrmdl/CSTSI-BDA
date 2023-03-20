import database from "../../database/database.js";
import { ref, onChildChanged } from "firebase/database";

const dbRef = ref(database, "produtos");

onChildChanged(dbRef, (snapshot) => {
  console.log(snapshot.val());
  if (snapshot.key == "-MwSzyJMlNDToTGtPuhc") {
    off(dbRef, "child_changed");
    console.log("callback removido!");
  }
});
