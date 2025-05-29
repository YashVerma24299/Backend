const express = require('express');
const app = express();
const port = 3000;
app.listen((port), () => {
  console.log(`Server is running on ${port}`);
});


                                    //RUN ONE BY ONE
// app.use((req, res, next) => {
//     req.time = new Date(Date.now());
//     console.log(req.method, req.hostname, req.path, req.time);
//     next();
// });    

// app.get('/', (req, res) => {
//     res.send('Hello, I am Root!');
// });  
// app.get('/about', (req, res) => {
//     res.send('About Page');
// });


                                    // RUN THESE 

// app.get('/', (req, res) => {
//     res.send('Hello, I am Root!');
// });  
// app.get('/about', (req, res) => {
//     res.send('About Page');
// });
// app.use((req, res, next) => {
//     req.time = new Date(Date.now());
//     console.log(req.method, req.hostname, req.path, req.time);
//     next();
// }); 


                                    // RUN THESE 

// app.get('/about', (req, res) => {
//     res.send('Hello, I am Middleware!');
// });  
// app.get('/about', (req, res) => {
//     res.send('About Page');
// });
// app.get('/', (req, res, next) => {
//     res.send("Rooot Page");
// }); 