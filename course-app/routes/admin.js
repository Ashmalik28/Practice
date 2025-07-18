const { Router } = require("express");
const adminRouter = Router();
const {adminModel, courseModel} = require("../db");
const jwt = require("jsonwebtoken");
const {JWT_ADMIN_PASSWORD} = require("../config")
const {adminMiddleware} = require("../middlewares/admin")

adminRouter.post("/signup" , async function(req,res){
    const {email , password , firstName , lastName } = req.body; // TODO : adding zod validation
    //TODO : hash the password so plaintext pw is not stored in the DB
    
    await adminModel.create({
        email , 
        password , 
        firstName ,
        lastName
    })
    res.json({
        message : "Signup succeeded"
    })
})
adminRouter.post("/signin" , async function(req,res){
   const {email , password} = req.body;

    //TODO : ideally the password should be hashed , and hence we can not compare the 
    // user provided password and the database password
    
    const admin = await adminModel.findOne ({
        email : email , 
        password : password 
    })
    if (admin){
        const token = jwt.sign({
            id: admin._id,

        }, JWT_ADMIN_PASSWORD);

    // Do cookie logic

    res.json({
        token : token 
      })
    }else {
        res.status(403).json({
           message : "Incorrect credentials" 
        })
    }

})

adminRouter.post("/course" , adminMiddleware , async function(req , res){
    const adminId = req.userId;

    const {title , description , imageUrl ,price } = req.body;
    const course = await courseModel.create({
        title , 
        description , 
        imageUrl , 
        price , 
        creatorId : adminId
    })
    res.json({
        message : "Course created successfully",
        courseId : course._id 
    })
})
adminRouter.put("/course" ,adminMiddleware, async function(req , res){
    const adminId = req.userId;

    const {title , description , imageUrl ,price , courseId } = req.body;
    const course = await courseModel.updateOne({
         _id: courseId ,
         creatorId : adminId 
    },{
        title , 
        description , 
        imageUrl , 
        price 
    })
    res.json({
        message : "Course updated",
        courseId : course._id 
    })
})
adminRouter.get("/course/bulk" , adminMiddleware , async function(req , res){
    const adminId = req.userId;

    const courses = await courseModel.find({
        creatorId : adminId 
    });
    res.json({
        message : "Your course Details",
        courses
    })
})

module.exports = {
    adminRouter : adminRouter
}