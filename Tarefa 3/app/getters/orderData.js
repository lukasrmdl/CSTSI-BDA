import { ref, query, orderByPriority, onChildAdded } from "firebase/database";
import database from "../../database/database.js";
const dbRef = ref(database);

const consulta = query(dbRef, orderByPriority(database))
onChildAdded(consulta,dados=>{
  console.log(dados.val())
  process.exit(0);
})