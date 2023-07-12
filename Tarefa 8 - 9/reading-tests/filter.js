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

    const filtro = {//filter
        //preco: {$lt: 5000}
        //preco:{$not:{$gte:5000}},
        importado: {$eq:false},
        $and:[
            {preco: {$gte: 3000}},
            {preco: {$lte: 9000}}
        ]
    }

    const opcoes = {//options
        sort: {preco:-1}, //ordenação descendente
        projection: {_id: 0, qtd_estoque: 0, descricao: 0,} //projeção
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