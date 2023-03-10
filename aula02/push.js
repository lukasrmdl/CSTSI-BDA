import db from "./database.js"
import { push, ref } from "firebase/database";

const newClient = {
	Nome: 'Maria',
	Idade: "15"
}
const newClient2 = {
	Nome: 'João',
	Idade: "25"
}
const newClient3 = {
	Nome: 'Ana',
	Idade: "23"
}

try{
	await push(ref(db, 'clientes/'), newClient)
	console.log('Inserido!')
	await push(ref(db, 'clientes/'), newClient2)
	console.log('Inserido!')
	await push(ref(db, 'clientes/'), newClient3)
	console.log('Inserido!')
}catch(error){
	console.log("Erro: "+error)
}finally{
	console.log('Finalizando ...')
	process.exit(0)
}

