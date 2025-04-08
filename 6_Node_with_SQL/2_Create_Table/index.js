// const { faker } = require('@faker-js/faker');
// let getRandomUser = () => {
//   return {
//     userId: faker.string.uuid(),
//     username: faker.internet.username(),
//     email: faker.internet.email(),
//     password: faker.internet.password()
//   };
// }
// console.log(getRandomUser());



const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'yashumai',
  password: 'root',
});
let q= "show Tables";
try {
    connection.query(q, (err, result)=>{
        if(err) throw err;
        console.log(result);
        console.log(result[0]);
        console.log(result[1]);
    })
} catch (err) {
    console.log(err)
} 
connection.end();

