const { Router } = require("express");
const courseRouter = Router();
const {userMiddleware} = require("../middlewares/user")
const {purchaseModel, courseModel} = require("../db")

courseRouter.post("/purchase" , userMiddleware , async function(req,res){
    const userId = req.userId ;
    const courseId = req.body.courseId;

    //should check if the price has already been paid or not 

    await purchaseModel.create({
        userId ,
        courseId 
    })

    res.json({
        message : "You have successfully bought the Course"
    })
})
courseRouter.get("/preview" , async function(req,res){
    const courses = await courseModel.find({});
    res.json({
        message : "All the available courses" ,
        courses 
    })
})

module.exports = {
    courseRouter : courseRouter 
}