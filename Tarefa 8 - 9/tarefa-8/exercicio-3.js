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

    //tasks 1, 2, 3 e 4

    const opcoes = {//options
        sort: {qtd_estoque:+1}, //ordenar de menor a maior qtd_estoque
        projection: {_id: 0, importado: 0, descricao: 0} //projeção
    }

    const filtro = {//filter
        preco: {$gte: 10000}, //preço maior que 100000
        $and:[ // qtd_estoque entre 100 e 500
            {qtd_estoque: {$gte: 100}},
            {qtd_estoque: {$lte: 500}}
        ]
    }

    //task 5

    const opcoes_2 = {//options
        sort: {preco: +1}, //ordenar de menor a maior preço
        projection: {_id: 0, descricao: 0} //projeção
    }

    const filtro_2 = {//filter
        importado: {$eq:true} // apenas produtos importados
    }

    //tasks 6

    const opcoes_3 = {//options
        sort: {preco: +1}, //ordenar de menor a maior preço
        projection: {_id: 0, descricao: 0} //projeção
    }

    const filtro_3 = {//filter
        preco: { $lte: 10000 }, // preço menor que 10000
        importado: false //importado ser falso
    }

    //task 7

    const opcoes_4 = {//options
        sort: {preco:+1}, //ordenar de menor a maior preço
        projection: {_id: 0, descricao: 0} //projeção
    }

    const filtro_4 = {//filter
        preco: {$in:[259990, 3500, 4500, 18500, 20500]}
    }

    //task 8

    const opcoes_5 = {//options
        sort: {preco:+1}, //ordenar de menor a maior preço
        projection: {_id: 0, descricao: 0, id_prod: 0} //projeção
    }

    const filtro_5 = {//filter
        qtd_estoque: {$lte: 150}
    }

    const resultados = await client.db('banco-bda').collection('produtos').find(filtro, opcoes).toArray()
    console.table(resultados);

    const resultados_2 = await client.db('banco-bda').collection('produtos').find(filtro_2, opcoes_2).toArray()
    console.table(resultados_2);

    const resultados_3 = await client.db('banco-bda').collection('produtos').find(filtro_3, opcoes_3).toArray()
    console.table(resultados_3);

    const resultados_4 = await client.db('banco-bda').collection('produtos').find(filtro_4, opcoes_4).toArray()
    console.table(resultados_4);

    const resultados_5 = await client.db('banco-bda').collection('produtos').find(filtro_5, opcoes_5).toArray()
    console.table(resultados_5);
}
catch (error) {
    console.log(error);
} 
finally {
    await client.close();
    process.exit(0);
}