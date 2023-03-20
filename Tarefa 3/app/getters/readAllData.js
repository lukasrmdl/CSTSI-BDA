import { ref, get } from "firebase/database";
import database from "../../database/database.js";
const dbRef = ref(database);

get(dbRef)
  .then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
    } else {
      console.log("Dados não encontrados!");
    }
    process.exit();
  })
  .catch((error) => {
    console.error(error);
    process.exit();
  });
