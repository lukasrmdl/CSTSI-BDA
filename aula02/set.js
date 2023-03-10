import db from "./database.js";
import {ref, set} from "firebase/database";

const newClientId = '-NQ8oqCGzAI9ToITl3An';
const refNode = ref(db,`clientes/${newClientId}`);
const newClientData = {
	Idade:"25",
	Nome:"João Batista"
}
set(refNode, newClientData)
	.then(()=>console.log('Inserido!!!'))
	.catch(()=>console.log("Erro ao inserir!!"))
	.finally(()=>process.exit())
