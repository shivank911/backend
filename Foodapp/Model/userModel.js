let express=require('express');
let mongoose=require('mongoose');
const crypto=require('crypto');
const emailValidator=require('email-validator');
const db_link='mongodb+srv://admin:X97H4WrVR895ZqSz@cluster0.6id0f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(db_link)
    .then(function(db){
        //console.log(db);
        console.log('db connected');

    })
    .catch(function(err){
        console.log(err);
    })
    const userSchema=mongoose.Schema({
        name:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
            unique:true,
            validate:function(){
                return emailValidator.validate(this.email);
            }
        },
        password:{
            type:String,
            required:true
            
        },
        confirmPassword:{
            type:String,
            required:true,
            validate:function(){
                return this.password==this.confirmPassword;
            }
        },
        role:{
            type:String,
            enum:['admin','user','resowner','deliveryboy'],
            default:'user',
        },
        profileImage:{
            type:String,
            default:'imag/users/default.png',
        },
        resetToken:String,
    });
    userSchema.pre('save',function(){
        this.confirmPassword=undefined
        console.log('before save',this);
    })
    // userSchema.pre('save',async function(){
    //     let salt=await bcrypt.genSalt();
    //     let haseddata=await bcrypt.hash(this.password,salt);
    //     this.password=haseddata;
    // })
    userSchema.post('save',function(doc){
        console.log('after save',doc);
    })

    userSchema.methods.createResetToken=function(){
        const resetToken=crypto.randomBytes(32).toString("hex");
        this.resetToken=resetToken;
        return resetToken;
    }
    userSchema.methods.resetPassword=function(password,confirmPassword){
        this.password=password;
        this.confirmPassword=confirmPassword;
        this.resetToken=undefined;
    }
    const usermodel=mongoose.model('usermode',userSchema);

    module.exports=usermodel;