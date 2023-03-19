import { ref } from "firebase/database";
import database from "../../database/database.js";
import { get } from "firebase/database";
import { child } from "firebase/database";

    const dbRef = ref(database);

    get(child(dbRef, `clientes/`)).then((snapshot) => {
        if (snapshot.exists()) {
            console.log(snapshot.val());
        } 
        else {
            console.log("Dados não encontrados!");
        }
        process.exit();
    }) .catch((error) => {
        console.error(error);
        process.exit();
    });