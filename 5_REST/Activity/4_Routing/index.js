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
app.use(express.static(path.join(__dirname,"public")));

let posts =[
    {
        id: "1a",
        username: "Yash Verma",
        content: "I love coding!"
    },
    {
        id: "2b",
        username: "Yash Verma2",
        content: "I love coding2!"
    },
    {
        id: "3c",
        username: "Yash Verma3",
        content: "I love coding3!"
    }
]

app.get("/posts", (req,res) =>{
    res.render("index.ejs", {posts});
})

app.get("/posts/new", (req,res) =>{
    res.render("new.ejs");
})
app.post("/posts", (req,res) =>{
    let {username, content} = req.body;
    posts.push({ username, content});
    res.redirect("/posts");
})

app.get("/posts/:id", (req,res) =>{
    let {id} = req.params;
    let post = posts.find((p)=> id==p.id)
    res.render("show.ejs", {post});
})
