const { json } = require('express');
const express=require('express')
let app=express();
let port = 8000;
const fs=require('fs');

const bodyParser = require('body-parser');
const { log } = require('console');
app.use(bodyParser.urlencoded({limit: '5000mb', extended: true, parameterLimit: 100000000000}));

app.use(express.json())
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(__dirname +"/views"));

cosnt 
import search from "./server/search.js";
import  register from "./server/register.js";
import  login from "./server/login.js";
import  edit from "./server/edit.js";
import remove from "./server/delete.js";
import update from "./server/update.js";
import dashboard from "./server/dashboard.js";
import sort from "./server/sort.js";

app.get("/",function (req,res){
    res.render("login.ejs")
})

app.get("/login",function(req,res){
    res.render("login.ejs")
})

app.get("/home",function(req,res){
    res.render("home.ejs")
})

app.get("/register",function(req,res){
    res.render("register.ejs")
})


app.post("/search",search)
app.post("/register",register)
app.post("/login",login)
app.post("/edit",edit)
app.post("/delete",remove)
app.post("/update",update)
app.post("/taskdetails",dashboard)
app.post("/showdetails",sort)

app.listen(port,()=>{
    console.log(`Listening on ${port}`)
})