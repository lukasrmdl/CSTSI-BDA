import { ref, query, orderByValue, onChildAdded, child } from "firebase/database";
import database from "../../database/database.js";
const dbRef = ref(database, "produtos");

const consulta = query(dbRef, orderByValue());
onChildAdded(consulta, (dados) => {
  let chave = dados.key;
  let valor = dados.val();
  console.log(`${chave} : ${valor}`);
});
setTimeout(() => process.exit(0), 5000);
