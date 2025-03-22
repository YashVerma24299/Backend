// use → Listens to all types of requests (GET, POST, PUT, DELETE) at a specific path.

let express = require("express");
let app = express();
let port = 3000;
app.listen(port, ()=>{
    console.log("app is listening on port:", port);
})

// app.use((req, res) =>{
//     console.log("Requests Recieved");
// })
// Open terminal,  
// run the file,
// reload on localhost  ---or---  reload on hoppscotch,
// "Requests Received" will appear in the terminal,
// Means "HANDLING REQUEST" done.


// Sending a Response
// app.use((req, res) =>{
//     console.log("Requests Recieved");
//     // res.send("This is a basic response");
//     // res.send( {
//     //     name:"apple",
//     //     color: "red"
//     // })
//     res.send("<b>Yash Verma</b>")
// })


//Routing
app.get("/search", (req, res) =>{
    res.send("This is a search response")
})
app.get("/help", (req, res) =>{
    res.send("This is a help response")
})
app.get("/",  (req, res) =>{
    res.send("This is a basic response")
})
app.get("*",  (req, res) =>{
    res.send("This is a wrong response")
})