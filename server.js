const express=require("express");
const app=express();
const ejs=require("ejs");
const expressLayout=require("express-ejs-layouts");
const path=require("path");


const PORT=process.env.PORT || 3000;
//assets
app.use(express.static('public')); 

//set template engine
app.use(expressLayout);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,"/resources/views"));
app.set('layout','home');

app.get("/",(req,res)=>{
    res.render('home');
});

app.listen(PORT,()=>{
    console.log("Server is running at port:3000...");
});