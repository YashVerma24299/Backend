const express= require("express");
const app = express();
let port =3000;
app.listen(port, ()=>{
    console.log("Listening on port:", port);
})


// EJS is also a package,  
// It wasn’t using by `require("ejs")`  
// because it was already acquired in Express
app.set("view engine", "ejs");
// `app.set` is used to set some configuration.  
// `view` means template.  
// So, template engine = EJS.


//In ejs,
// request ko send nhi, render karte hai...
// render -> files ko bhejna
app.get("/" , (req,res)=>{
    res.send("This is a Root.");
})
app.get("/home" , (req,res)=>{
    res.render("home.ejs");
})