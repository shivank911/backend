let mongoose=require('mongoose');
let express=require('express');
let db_link='mongodb+srv://admin:X97H4WrVR895ZqSz@cluster0.6id0f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(db_link)
.then(function(db){
    console.log("plan db connected");
})
.catch(function(err){
    console.log(err.message);
})

const planSchema=mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:true,
        maxlength:[20,'plan name should not exceed 20 char']
    },
    duration:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:[true,'price not entered'],
    },
    ratingsAverage:{
        type:Number,
    },
    discount:{
        type:Number,
        validate:[function(){
            return this.discount<100;
        },'discount should not exceed price']
    }
});
const planmodel=mongoose.model("planmodel",planSchema);
(async function createPlan(){
    let plan ={
        name:"SuperFood",
        duration:30,
        price:1000,
        ratingsAverage:5,
        discount:20
    }
    // let data=await planmodel.create(plan)
    // console.log(data);
    let doc=new planmodel(plan);
    await doc.save();

})();


module.exports=planmodel;