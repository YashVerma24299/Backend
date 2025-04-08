const { faker } = require('@faker-js/faker');
let getRandomUser = () => {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password()
  };
}
console.log(getRandomUser());


// Get the client
const mysql = require('mysql2');

// Create the connection to database
// require pre database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'yashumai',
  password: 'root',
});

try {
    connection.query("show Tables", (err, result)=>{
        if(err) throw err;
        console.log(result);
    })
} catch (err) {
    console.log(err)
}
connection.end();

