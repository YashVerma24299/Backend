// https://expressjs.com/en/guide/error-handling.html
const express = require('express');
const app = express();
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

app.get('/', (req, res) => {
  res.send('I, am the root');
});


// http://localhost:3000/error go and see
app.get('/error', (req, res) => {
  ab=ab;
});
                  // Try these error handlers
// 1.
// app.use((err,req,res,next) => {
//   //see both
//   // console.log(err);
//   console.log('______ERROR______');
// });
// 2.
// app.use((err,req,res,next) => {
//   console.log('______ERROR______');
//   next();
// });
// 3.
// app.use((err,req,res,next) => {
//   console.log('______ERROR______');
//   next(err);
// });
// app.use((err,req,res,next) => {
//   console.log('______ERROR2______');
//   //This give default error message in the last
//   next(err);
// });

// next() = Denote the call of simple next middleware function (non error handling middleware)
// next(err) = Denote the call of next middleware function with an error (error handling middleware)