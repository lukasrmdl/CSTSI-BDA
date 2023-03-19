import db from "../database/database.js";
import {ref, child,set} from "firebase/database";

const refNode = ref(db,'clientes/-NQ8oq1W7_Cv9R8XD4hK')
const refAttr = child(refNode,'Nome')

try{
	await set(refAttr, "Maria Ribeiro")
	console.log("Alterado!!!")
}catch(error){
	console.log("Error:"+error)
}finally{
	console.log("Finish!!!")
	process.exit(0)
}
