const express = require('express');
const app = express();
const port = 3000;
app.listen((port), () => {
  console.log(`Server is running on ${port}`);
});


                        // Middleware function
app.use((req,res) =>{
    // Jese hi localhost par request aayegi, yeh function execute hoga,
    // aur console par message print karega.
    //aur aage ke route execute nhi honge.
    // Yeh middleware function sirf ek baar hi execute hoga.    
    // Agar aapko aage ke route execute karne hain, toh next() function call karna padega.
    // Agar aap next() function call nahi karte, toh yeh middleware function ke baad koi aur route execute nahi hoga.
    // khi pr bhi jao "res.send" ji show hoga
    console.log('Middleware function executed');
    res.send('Middleware executed');
})

// Route handler
app.get('/', (req, res) => {
    res.send('Hello, I am Root!');
});
// Route handler for another path   
app.get('/about', (req, res) => {
    res.send('About Page');
});