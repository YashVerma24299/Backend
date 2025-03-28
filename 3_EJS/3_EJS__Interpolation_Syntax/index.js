// CHeck -> https://ejs.co/
// Check above website
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