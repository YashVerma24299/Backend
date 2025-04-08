// for data insertion, we generally prefer -> PLACEHOLDER

const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'yashumai',
  password: 'root',
});

//Insert new single data
// let q= "insert into user (id, username, email, password) values(?, ?, ?, ?)";
// let user = ["123", "123_newuser", "abc@gmail.com", "abcd"];

// try {
//     connection.query(q, user, (err, result)=>{
//         if(err) throw err;
//         console.log(result);
//     })
// } 
// catch (err) {
//     console.log(err)
// } 
// connection.end();



// Insert new many data
let q= "insert into user (id, username, email, password) values ?";
let users = [
    ["456", "123_newuserb", "abc@gmail.comb", "abcdb"],
    ["789", "123_newuserc", "abc@gmail.comc", "abcdc"]
];

try {
    connection.query(q, [users], (err, result)=>{
        if(err) throw err;
        console.log(result);
    })
} 
catch (err) {
    console.log(err)
} 
connection.end();