const mysql=require('mysql2');

const connection=mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'Snehal@12k',
        database:'mydb'
    }
);

connection.connect(function(err){
    if(err) throw err;
    else
    console.log("connected");
});

module.exports=connection;