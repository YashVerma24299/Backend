const express = require('express');
const app = express();
const port = 3000;
app.listen((port), () => {
  console.log(`Server is running on ${port}`);
});

//Execute for every request 
app.use((req,res,next) =>{
    console.log('Middleware function 1');
    next();
})
app.use((req,res,next) =>{
    console.log('Middleware function 2');
    next();
})

app.get('/', (req, res) => {
    res.send('Hello, I am Root!');
});  
app.get('/about', (req, res) => {
    res.send('About Page');
});