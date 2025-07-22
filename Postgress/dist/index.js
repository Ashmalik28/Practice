"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const express = require('express');
const app = express();
app.use(express.json());
const pgClient = new pg_1.Client({
    user: "neondb_owner",
    password: "npg_GWEPr5tALfm3",
    port: 5432,
    host: "ep-twilight-dew-a1hh7776-pooler.ap-southeast-1.aws.neon.tech",
    database: "neondb",
    ssl: true
});
pgClient.connect();
//@ts-ignore
app.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const city = req.body.city;
    const country = req.body.country;
    const street = req.body.street;
    const pincode = req.body.pincode;
    try {
        const insertQuery = `INSERT INTO users (username , email , password) VALUES ($1 , $2 , $3) RETURNING id;`;
        const addressQuery = `INSERT INTO addresses (city , country , street , pincode , user_id) VALUES ($1 , $2 , $3 , $4 , $5);`;
        yield pgClient.query("BEGIN;");
        const response = yield pgClient.query(insertQuery, [username, email, password]);
        const userId = yield response.rows[0].id;
        const addressInsertResponse = yield pgClient.query(addressQuery, [city, country, street, pincode, userId]);
        yield pgClient.query("COMMIT");
        res.json({
            message: "You have signed up"
        });
    }
    catch (e) {
        console.log(e);
        res.json({
            message: "Error while signing up"
        });
    }
}));
//@ts-ignore
app.get("/metadata", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.query.id;
    const query = `SELECT users.id , users.username , users.email , addresses.city , addresses.country , addresses.street , addresses.pincode 
    FROM users JOIN addresses on users.id = addresses.user_id 
    WHERE users.id = $1;`;
    const response = yield pgClient.query(query, [id]);
    res.json({
        response: response.rows
    });
}));
app.listen(3000);
