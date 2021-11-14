let express=require('express');
let app=express();
const userModel=require('./Model/userModel')
const authRouter=require('./Router/authRouter');
const userRouter=require('./Router/userRouter');
const cookieParser=require('cookie-parser');
const bcrypt=require('bcrypt');
app.use(cookieParser());
app.use(express.json());
app.use('/user',userRouter);
app.use("/auth",authRouter);

app.listen(3000);