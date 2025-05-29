//API tken as query string
const express = require('express');
const app = express();
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

app.get('/', (req, res) =>  {
    console.log('Root');
    res.send('Hello, I am Root!');
});

//Method-1
// app.use('/api', (req, res,next) => {
//     let {token} = req.query;
//     if (token === 'giveaccess') {
//         next();
//     };
//     res.send('Access Denied');
// });
// app.use('/api', (req, res) => {
//     res.send('Data');
// });
//Method-2
// const checkToken = (req, res,next) => {
//     let {token} = req.query;
//     if (token === 'giveaccess') {
//         next();
//     };
//     res.send('Access Denied');
// };
// app.use('/api', checkToken, (req, res) => {
//     res.send('Data');
// });

// try these URLs in your browser:
// http://localhost:3000/api
// http://localhost:3000/api?token=giveaccess