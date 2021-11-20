const express=require('express');
const mongoose=require('mongoose');
let db_link='mongodb+srv://admin:X97H4WrVR895ZqSz@cluster0.6id0f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(db_link)
.then(function(db){
    console.log("review db connected");
})
.catch(function(err){
    console.log(err);
})

let reviewSchema= new mongoose.Schema({
    review:{
        type:String,
        required:[true,'review is required'],
    },
    rating:{
        type:String,
        min:1,
        max:10,
        required:[true,'rating is required'],
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    },
    user:{
        type:mongoose.Schema.ObjectId,
        ref:'userModel',
        required:[true,'review must belong to a user'],
    },
    plan:{
        type:mongoose.Schema.ObjectId,
        ref:'planModel',
        required:[true,'review must belong to a plan'],
    }
});

let reviewmodel=mongoose.model('reviewmodel',reviewSchema);
module.exports=reviewmodel;
