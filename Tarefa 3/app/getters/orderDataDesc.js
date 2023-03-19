import { ref } from "firebase/database";
import database from "../../database/database.js";
import { get } from "firebase/database";
import { child } from "firebase/database";

db()
  .then((db) => {
    //db contem a referencia ao banco
    console.log(db); //mostra informacoes da conexao(pode excluir)
    //implemente aqui
  })
  .catch((err) => console.log(err));
