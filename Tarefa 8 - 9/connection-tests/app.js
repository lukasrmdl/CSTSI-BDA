import {MongoClient} from 'mongodb'

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
        else throw Error("Erro ao conectar ao banco !!")
    }
catch (error) {
        console.log(error);
    } 

    const produto = {
        id_prod : 130,
        nome: "SmartWatch Samsumg 5G 4GB",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu mi finibus, aliquet nunc id, pharetra urna. Donec volutpat cursus purus, vel eleifend est egestas nec.",
        importado: true,
        preco: 17450,
        qtd_estoque: 150
    }
    const result = await client.db('banco-bda')
                                    .collection('produtos')
                                    .insertOne(produto)
    console.log(result.acknowledged && "Produto Inserido!!");
