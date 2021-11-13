const http =require('http');
const fs=require('fs');
const _=require('lodash');
const app=require('express');
let server=http.createServer((req,res)=>{
    console.log("request has been made from browser to server");
   

    res.setHeader('Content-Type','text/html');
    let path='./views';
    switch(req.url){
        case '/':
            path+='/index.html';
            break;
        case '/about':
            path+='/about.html'
            break;
        default :
        path+='/404.html';
        break;
    }
    fs.readFile(path,(err,filedata)=>{
        if(err){
            console.log(err);
        }
        else{
            res.write(filedata);
            res.end();
        }
    })
    


})

server.listen(3000,'localhost',()=>{
    console.log('server is running on port 3000');
})