const express= require("express");
const app = express();
const port=8080;

app.get("/register", (req,res) =>{
    let {USER, PASSWORD} =req.query;
    res.send("Standard GET response. Welcome "+USER);
})
app.post("/register", (req,res) =>{
    res.send("Standard POST response");
})

app.listen(port, ()=>{
    console.log("Listening at port:",port); 
})