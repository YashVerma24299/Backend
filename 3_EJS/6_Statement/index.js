//Leran conditional, loop type statement
// https://ejs.co/ -> prefer this

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


app.get("/if", (req,res)=>{
    let value = Math.floor(Math.random()*6)+1;
    res.render("Conditional_Statement.ejs", {value}); 
})

//loop
app.get("/ig/:username", (req,res)=>{
    let followers = ["google", "microsoft", "amazon", "flipkart"];
    let {username} = req.params;
    res.render("Loop.ejs", {followers, username}); 
})

