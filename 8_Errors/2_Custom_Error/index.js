// Learn how to generate custom error in default error
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status
const MyError = require('./MyError');
const express = require('express');
const app = express();
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

app.get('/', (req, res) => {
  res.send('I, am the root');
});


// http://localhost:3000/api?token=giveaccess
const checkToken = (req, res,next) => {
    let {token} = req.query;
    if (token === 'giveaccess') {
        next();
    };
    // see error in console 
    throw new MyError(401,'Access Denied');
    // Yhase sida 31 pr chla gya
};
app.get('/api',checkToken, (req, res) => {
    res.send("data");
});

// 1. http://localhost:3000/api?token=giveaccess && http://localhost:3000/api?token=giveacce
// app.use((err,req, res,next) => {
//     console.log("ERROR");
//     res.send(err);
// });

// 2. http://localhost:3000/api?token=giveaccess && http://localhost:3000/api?token=giveacce
// app.use((err,req, res,next) => {
//     let {status, mesaage} = err;
//     res.status(status).send(message);
// });