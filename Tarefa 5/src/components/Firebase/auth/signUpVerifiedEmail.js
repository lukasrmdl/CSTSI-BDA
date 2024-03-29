import db from '../../libs/firebase/rtdb_conection.js'
import {
    createUserWithEmailAndPassword,
    getAuth,
    sendEmailVerification
} from 'firebase/auth';

//###AUTENTICAÇÃO####
const auth = getAuth();
// CRIAÇÃO DO USUÁRIO
// User data
const user = {
    email: 'lukas.rmdl@gmail.com',
    password: '123456'
}


try {
    const credentials = await createUserWithEmailAndPassword(
            auth, user.email, user.password
        );
	await sendEmailVerification(credentials.user)
    console.log("Usuario criado verifique seu email!!!")
} catch (e) {
    console.error("Erro ao criar usuario: "+e.message)
}