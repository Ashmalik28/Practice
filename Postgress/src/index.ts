import {Client} from 'pg';
const express = require('express');

const app = express();
app.use(express.json());

const pgClient = new Client({
    user : "neondb_owner",
    password : "npg_GWEPr5tALfm3",
    port : 5432,
    host : "ep-twilight-dew-a1hh7776-pooler.ap-southeast-1.aws.neon.tech",
    database : "neondb",
    ssl: true
})

pgClient.connect();

//@ts-ignore
app.post("/signup" , async (req,res)  => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    const city = req.body.city ;
    const country = req.body.country;
    const street = req.body.street;
    const pincode = req.body.pincode;

    try{
        const insertQuery = `INSERT INTO users (username , email , password) VALUES ($1 , $2 , $3) RETURNING id;`
        const addressQuery = `INSERT INTO addresses (city , country , street , pincode , user_id) VALUES ($1 , $2 , $3 , $4 , $5);`

        await pgClient.query("BEGIN;")
        const response = await pgClient.query(insertQuery , [username , email, password]);
        const userId = await response.rows[0].id;
        const addressInsertResponse = await pgClient.query(addressQuery , [city , country , street , pincode , userId]);

        await pgClient.query("COMMIT");

        res.json({
            message : "You have signed up"
        })
    }catch(e){
        console.log(e);
        res.json({
            message : "Error while signing up"
        })
    }

})
//@ts-ignore
app.get("/metadata" , async (req , res ) => {
    const id = req.query.id;

    const query = `SELECT users.id , users.username , users.email , addresses.city , addresses.country , addresses.street , addresses.pincode 
    FROM users JOIN addresses on users.id = addresses.user_id 
    WHERE users.id = $1;`

    const response = await pgClient.query(query , [id]);

    res.json({
       response : response.rows
    })

})
app.listen(3000);

