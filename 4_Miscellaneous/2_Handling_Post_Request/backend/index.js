const express= require("express");
const app = express();
const port=8080;
app.listen(port, ()=>{
    console.log("Listening at port:",port); 
})
app.get("/register", (req,res) =>{
    res.send("Standard GET response");
})

app.use(express.urlencoded({extended:true}))
app.use(express.json); // agr data json m hua tho y kaam aaiga

app.post("/register", (req,res) =>{
    console.log(req.body) // It will run due to 11 no. line
    let {USER, PASSWORD} = req.body;
    res.send("Standard POST response. Welcome " + USER);
})


