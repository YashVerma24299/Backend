// Nodemon -> Hand to Hand change in localhost

let express = require("express");
let app = express();
let port = 3000;
app.listen(port, ()=>{
    console.log("app is listening on port:", port);
})


// Nodemon + Path Parameters
app.get("/",  (req, res) =>{
    res.send("This is a basic response.");
});
app.get("/:username",  (req, res) =>{
    let {username} = req.params;
    res.send("This is a basic response   "+ username);
});
app.get("/:USERNAME/:ID",  (req, res) =>{
    console.log(req.params);
    res.send("This is a response");
});