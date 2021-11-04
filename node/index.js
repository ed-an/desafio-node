const express = require('express');
const app     = express();
const port    = 3000;
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'desafio'
}

app.get('/', (req,res) => {
   
    
    const mysql      = require('mysql')
    const connection = mysql.createConnection(config)
    
    const sql = `INSERT INTO people(name) values('edmilson')`;
    connection.query(sql);
    connection.end();

    res.send('<h1>Full Cycle Rocks!</h1>')
});

app.listen(port, ()=>{
    console.log('Rodando na porta' + port);
});