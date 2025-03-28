const express = require("express");
const instadata = require("./data.json");
const app = express();
const port =3000;
app.listen(port, ()=>{
    console.log("Listening at port:",port);
})
app.set("view engine", "ejs");
app.get("/", (req,res) =>{
    res.send("Root");
})
app.get("/ig/:username", (req,res) =>{
    let {username} =req.params;
    let data = instadata[username];
    if(data){
        res.render("instagram.ejs", {data});
    }else{
        res.render("error.ejs");
    }
})