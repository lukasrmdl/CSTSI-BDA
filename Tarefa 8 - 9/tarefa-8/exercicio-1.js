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
        else throw Error("Erro ao conectar ao banco !!")

    const produto = {
        id_prod: '8b43e39c-7e75-4d4d-9f61-d4c3dc29a163',
        nome: 'Fone de Ouvido sem Fio',
        descricao: 'Fone de ouvido Bluetooth com cancelamento de ruído',
        preco: 199.99,
        importado: false,
        qtd_estoque: 5
    }
    const result = await client.db('banco-bda')
                                    .collection('produtos')
                                    .insertOne(produto)
    console.log(result.acknowledged && "Produto Inserido!!");
    }
    catch (error) {
        console.log(error);
    } 
    finally {
        await client.close()
        process.exit(0)
    }