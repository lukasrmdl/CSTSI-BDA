import { ref, query, orderByChild, onChildAdded } from "firebase/database";
import database from "../../database/database.js";
const dbRef = ref(database,'produtos');

const consulta = query(dbRef, orderByChild('id_prod'))
onChildAdded(consulta,dados=>{
  console.log(dados.val())
})