const express = require('express');
const util = require('util');
const mysql = require('mysql')
var syncSql = require('sync-sql');

const app     = express();
const port    = 3000;
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'desafio'
}

const db = mysql.createConnection(config)
db.connect((err) => {  
    if (err) throw err
     console.log("Connected");
})

function runQuery(query) {
   return syncSql.mysql(config, query).data.rows
}

app.get('/', (req,res) => {
    runQuery(`INSERT INTO people(name) values('edmilson1')`);
    var data = runQuery(`SELECT * FROM people`);
    const ulData = data.map((elements) => {
        return `<li>${elements.id} - ${elements.name}</li>`;
    });
    res.send(`<html><head><title></title></head>
    <body><h1>Full Cycle Rocks!</h1><ul>${ulData}</ul></body></html>`);
});

app.listen(port, ()=>{
    console.log('Rodando na porta' + port);
});
