const { faker } = require('@faker-js/faker');
const  mysql = require("mysql2");
const express = require("express");
const app = express();
let port =8080;
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"/views"));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'yashumai',
    password: 'root'
});

let generatedata = () =>{
    return [
        faker.string.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password()
    ];
}


app.listen(port ,() =>{
    console.log("Listening on port:",port);
})

// count total number of users
// home page
app.get("/", (req,res)=>{
    let q = "select count(*) from user";
    try {
        connection.query(q, (err, result)=>{
            if(err) throw err;
            // console.log(result[0]);
            // console.log(result[0]['count(*)']);
            let cnt = result[0]['count(*)'];
            res.render("home.ejs", {cnt});
        })
    } 
    catch (err) {
        console.log(err);
        res.send("Some Error in DB");
    }    
})


//show user details
app.get("/user", (req,res)=>{
    let q = "select * from user";
    try { 
        connection.query(q, (err, result)=>{
            if(err) throw err;
            // console.log(result);
            // res.send(result);
            res.render("users.ejs", {result});
        })
    } 
    catch (err) {
        console.log(err);
        res.send("Some Error in DB");
    }    
})


//Edit Route
app.get("/user/:id/edit", (req,res)=>{
    let {id} = req.params;
    let q= `select * from user where id='${id}'`;

    try { 
        connection.query(q, (err, result)=>{
            if(err) throw err;
            // console.log(result);
            // console.log(result[0]);
            let user = result[0];
            res.render("edit.ejs", {user});
        })
    } 
    catch (err) {
        console.log(err);
        res.send("Some Error in DB");
    }  
})

//IN EDIT.ejs
// update route
app.patch("/user/:id", (req,res) =>{
    let {id} = req.params;
    let {password: newPassword, username: newUsername} = req.body;
    let q= `select * from user where id='${id}'`;

    try { 
        connection.query(q, (err, result)=>{
            if(err) throw err;
            let user = result[0];
            if(newPassword!=user.password){
                res.send("Wrong Password")
            }
            else{
                let q2 = `update user set username='${newUsername}' where id='${id}'`;
                connection.query (q2, (err,result) =>{
                    if(err) throw err;
                    res.redirect("/user");
                })
            }
        })
    } 
    catch (err) {
        console.log(err);
        res.send("Some Error in DB");
    }  
})