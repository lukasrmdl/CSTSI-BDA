import {
    ref,
    query,
    orderByChild,
    onChildAdded,
    startAt
} from "firebase/database"

function getOrderByChild(order,db,callback){
    console.log(order);
    const refDB = ref(db,'produtos/');
    const consulta = query(refDB,orderByChild(order))
    onChildAdded(consulta,callback)
}

function getFilterByChild(filter,value, db,callback){
    console.log(filter)
    const refDB = ref(db,'produtos/');
    const consulta = query(refDB,orderByChild(filter), startAt(value))
    onChildAdded(consulta,callback)
}

function getMostExpensive(db,setValue,list,callback){
    const refDB = ref(db,'produtos/');
    const consulta = query(refDB, orderByChild('preco'));
    onChildAdded(consulta,callback)
}

function getMostCheap(db,callback){
    const refDB = ref(db,'produtos/');
    const consulta = query(refDB, orderByChild('preco').limitToFirst(10));
    onChildAdded(consulta,callback)
}

function getPriceRange(value, db,callback){
    //implemente aqui
}

export {getOrderByChild, getFilterByChild, getMostExpensive, getMostCheap, getPriceRange}
