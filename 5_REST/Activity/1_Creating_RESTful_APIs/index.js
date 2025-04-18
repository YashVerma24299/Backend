const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
app.listen(port, ()=> {
    console.log("Listening at port:", port);
})
app.use(express.urlencoded({extended:true}));

app.set("views engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set(express.static(path.join(__dirname,"public")));



app.get("/", (req,res) =>{
    res.send("Server working well!");
})