const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'yashumai',
  password: 'root',
});


const { faker } = require('@faker-js/faker');
let generatedata = () =>{
    return [
        faker.string.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password()
    ];
}


let q= "insert into user (id, username, email, password) values ?";
let data =[];
for(let i=0; i<100; i++){
    data[i]=generatedata();
}     

try {
    connection.query(q, [data], (err, result)=>{
        if(err) throw err;
        console.log(result);
    })
} 
catch (err) {
    console.log(err)
}    
connection.end();


