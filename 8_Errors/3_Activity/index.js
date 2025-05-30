//  Create an admin route & send an error with a 403 status code
const MyError = require('../2_Custom_Error/MyError');
const express = require('express');
const app = express();
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
app.get('/', (req, res) => {
    res.send('I, am the root');
});

app.get('/admin', (req, res) => {
    throw new MyError(403, 'You are not allowed to access this route');
});
                        // Try with or without the error handler
// app.use((err, req, res, next) => {
//     let {status, message} = err;
//     res.status(status).send(message);
// });


// trycatch
// wrapAsync
// mongooseerror