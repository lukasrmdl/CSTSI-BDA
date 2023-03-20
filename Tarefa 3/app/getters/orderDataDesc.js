import { ref, query, orderByKey, onValue } from "firebase/database";
import database from "../../database/database.js";
const dbRef = ref(database, "produtos");

const consulta = query(dbRef, orderByKey());
onValue(consulta, (dados) => {
  let arrayDados = Object.entries(dados.val());
  let invert = Object.fromEntries(arrayDados.reverse());
  console.log(invert);
  process.exit(0);
});
