// https://expressjs.com/en/starter/hello-world.html

let exp = require("express");
let app = exp();

//Try these:
    // console.log(app);
    // console.dir(app);

// In Express.js, a port is a specific communication endpoint that allows the server(backend) to listen for and handle incoming requests.
// 3000, 5000, 7000 → Port number where the server listens for requests.
// A port is like a door where the server listens for requests.
let port = 3000; 

app.listen (port, ()=>{
    console.log("app is listening on port:", port)
})

// After running it in the terminal,  
// search localhost:3000 on Google,  
// and you'll see  ->   Cannot GET /  
// because the server is only listening but not sending any response.  