const bcrypt = require("bcrypt");
const express = require("express");
const {UserModel , TodoModel} = require("./db");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "adkjnxadncjdanadc";
const mongoose = require('mongoose');
const { z } = require("zod");

mongoose.connect("mongodb+srv://ashyammalik052:fRQiTE1ipiJMVWDB@cluster0.nhajw9z.mongodb.net/todo-app-2")


const app = express();
app.use(express.json());

app.post("/signup" , async function(req , res) {
    const requiredBody = z.object({
        email : z.string().min(3).max(100).email(),
        name : z.string().min(3).max(20) ,
        password : z.string().min(3).max(20)
    })

    // const parsedData = requiredBody.parse(req.body);
    const parsedDataWithSuccess = requiredBody.safeParse(req.body);

    if(!parsedDataWithSuccess.success){
        res.json({
            message : "Incorrect Format"
        })
        return
    }

    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    let errorThrown = false;
    try{
        const hashedPassword = await bcrypt.hash(password , 5);
        console.log(hashedPassword);
    
        await UserModel.create({
            email : email,
            password : hashedPassword,
            name : name
        })
    }catch(e){
        console.log("Error while putting in the DB")
        res.json({
            message : "User already exists"
        })
        errorThrown = true;
    }
   if(!errorThrown){
    res.json({
        message : "You have signed up"
    })
   }
});
app.post("/signin" , async function(req , res) {
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email:email,
    })

    if(!user){
        res.status(403).json({
            message : "User does not exist in our DB"
        })
        return
    }

    const passMatch = await bcrypt.compare(password , user.password); 

    console.log(user);

    if(passMatch){
        const token = jwt.sign({
            id : user._id.toString()
        }, JWT_SECRET);
        res.json({
            token : token
        });
    }else{
        res.status(403).json({
            message : "Incorrect credentials"
        })
    }


});

function auth(req , res , next ){
    const token = req.headers.token;
    const decodedData = jwt.verify(token , JWT_SECRET);

    if(decodedData){
        req.userId = decodedData.id;
        next();
    }else {
        res.status(403).json({
            message : "Incorrect Credentials"
        })
    }
}

app.post("/todo" , auth , async function(req , res) {
    const userId = req.userId;
    const title = req.body.title;
    const done = req.body.done;

    await TodoModel.create({
        userId,
        title,
        done
    })

    res.json({
        message : "Todo Created"
    })


});
app.get("/todos" , auth , async function(req , res) {
    const userId = req.userId;
    const todos = await TodoModel.find({
        userId
    });
    res.json({
        todos
    });
});



app.listen(3000);