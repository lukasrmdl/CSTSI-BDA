import { MongoClient } from 'mongodb'

const myDB = {
    server: '127.0.0.1',
    port: 27017,
}

const uri = `mongodb://${myDB.server}:${myDB.port}`;
const client = new MongoClient(uri);

try {
    await client.connect()
    
    if (client.db('banco-bda').command({ "ping": 1 }))
        console.log("Conectado!");
    else 
        throw Error("Erro ao conectar ao banco !!")

    const termo = "SmartWatch";

    await client.db('banco-bda').collection('produtos').createIndex({ nome: 'text' });

    const filtro = {//filter
        $text: {
            $search: termo,
            $caseSensitive: true
        }
    }

    const opcoes = {//options
        projection: {_id: 0, qtd_estoque: 0, id_prod: 0, descricao: 0, preco: 0, importado: 0, desconto: 0} //projeção
    }

    const resultados = await client.db('banco-bda').collection('produtos').find(filtro, opcoes).toArray()
    console.table(resultados);
}
catch (error) {
    console.log(error);
} 
finally {
    await client.close();
    process.exit(0);
}