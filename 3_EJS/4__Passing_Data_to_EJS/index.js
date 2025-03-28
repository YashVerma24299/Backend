const express =require("express");
let app = express();
let port =3000;
app.listen(port, () =>{
    console.log("Listening on the port:", port);
})
app.set("view engine", "ejs");
app.get("/", (req,res)=>{
    res.send("ROOT");
})
app.get("/home", (req,res)=>{
    res.render("home.ejs");
})
app.get("/dice", (req,res)=>{
    let value = Math.floor(Math.random()*6)+1;
    // passing data in ejs from below
    res.render("roll_dice.ejs", {num:value}); 
})

