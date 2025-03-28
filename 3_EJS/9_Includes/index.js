const express =require("express");
const instadata = require("./data.json");
let app = express();
let port =3000;

app.use(express.static("public"));
app.set("views engine", "ejs");

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

