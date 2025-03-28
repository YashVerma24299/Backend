
const express =require("express");
const instadata = require("./data.json");
let app = express();
// const path = require("path");
let port =3000;

app.use(express.static("public"));
app.set("views engine", "ejs");

// access views directory from backend folder so, this line use
// nodemon EJS/7_Activity/index.js
// app.set("views", path.join(__dirname, "/views"));
// app.use(express.static(path.join(__dirname, "public")));    -> Both
// app.use(express.static(path.join(__dirname, "/public")));   -> Same

app.listen(port, () =>{
    console.log("Listening on the port:", port);
})
app.get("/", (req,res)=>{
    res.send("ROOT");
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

