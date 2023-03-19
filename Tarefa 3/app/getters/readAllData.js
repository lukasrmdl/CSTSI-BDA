import  * as fb from "firebase/database";
import db from "../../database/database.js";

db()
.then(db=>{//db contem a referencia ao banco
    console.log(db)//mostra informacoes da conexao(pode excluir)
    //implemente aqui
}).catch(err=>console.log(err))