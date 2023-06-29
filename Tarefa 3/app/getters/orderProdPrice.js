import { ref, query, orderByChild, onChildAdded, child } from "firebase/database";
import database from "../../database/database.js";
const dbRef = ref(database, "produtos");

const consulta = query(dbRef, orderByChild('preco'));
onChildAdded(consulta, (dados) => {
  let chave = dados.key;
  let valor = dados.val();
  console.log(`${chave} : ${JSON.stringify(valor, null, 4)}`);
});
setTimeout(() => process.exit(0), 3000);
