const express =require("express");
let app = express();
let port =3000;
app.listen(port, () =>{
    console.log("Listening on the port:", port);
})
app.set("view engine", "ejs");

app.get("/ig/:username", (req,res)=>{
    let {username}=req.params;
    console.log(username);
    res.render("instagram.ejs" , {username});
})

