import bcrypt from 'bcrypt';
import { pool } from '../../db/index.js';

export async function register({name, firstname, email, password, birth_date}) {
    console.log("fonction register dans services/authServices/register.service.js ok");
    
    // validation basique (si les champs sont présent)
    if(!name || firstname || !email || !password || !birth_date) {
       const error = new Error('nom, prenom, email, mdp et date de naissance obligatoir');
       error.status = 400;
       throw error;
    }

    //hash du mdp
    const hash = await bcrypt.hash(password, 10); 
    console.log(hash);
    
    //enregistrer l'utilisateur dans la db
    const query = `
        INSERT INTO users (email, password_hash, birth_date, birth_city) 
        VALUES (?,?,?,?)
    `;
    console.log(query);
    
    const [result] = await pool.execute(query, [name, firstname, email, hash, birth_date]);
    console.log(result);
    
    return {
        id: result.insertId,
        name,
        firstname,
        email,
        birth_date,
        created_at: new Date()
    }
}