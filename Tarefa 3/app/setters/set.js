import db from "../../database/database.js";
import { ref, set } from "firebase/database";

const newClientId = "-NQ8oqCGzAI9ToITl3An";
const refNode = ref(db, `clientes/${newClientId}`);
const newClientData = {
  Idade: "27",
  Nome: "JP Batista",
};
set(refNode, newClientData)
  .then(() => console.log("Inserido!!!"))
  .catch(() => console.log("Erro ao inserir!!"))
  .finally(() => process.exit());
