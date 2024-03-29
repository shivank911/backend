let express =require('express');
let app=express();
const userRouter=express.Router();
let cookieParser=require('cookie-parser');
app.use(express.json());
app.use(cookieParser());
let jwt=require('jsonwebtoken');
let JWT_KEY=require('../secrets');
const usermodel=require('../Model/userModel')
const {getUser,getAllUser,deleteUser,updateUser,}=require('../Controllers/userController');
const { login, signup, isAuthorise,protectRoute,forgetpassword,resetpassword,logout } = require('../Controllers/authController');
//user ke options
userRouter.route('/:id')
.patch(updateUser)
.delete(deleteUser);

//signup 
userRouter.route('/signup')
.post(signup)

//login
userRouter.route('/login')
.post(login);

userRouter
.route('/logout')
.get(logout)

userRouter.route('/forgetpassword')
.post(forgetpassword);


userRouter.route('/resetpassword/:token')
.post(resetpassword);


//profilepage
app.use(protectRoute);
userRouter.route('/userProfile')
.get(getUser)

//admin privilidges
app.use(isAuthorise(['admin']));
userRouter.route('')
.get(getAllUser)





module.exports=userRouter