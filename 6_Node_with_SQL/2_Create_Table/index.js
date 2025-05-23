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
    })
} catch (err) {
    console.log(err)
} 
connection.end();

