const express = require('express');
const {Client} = require('pg');

const client = new Client({
    connectionString: process.env.DATABASE_URL
});

client.connect();

const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/query', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    console.log("Receiving request");
    if(req.body.query) {
        console.log(req.body.query);
        client.query(req.body.query, (err, r) => {
            if (err) throw err;
            rows = [];
            for(let row of r.rows){
                rows.push(row);
            }
            response = JSON.stringify(rows);
            console.log(response);
            res.end(response);
        });
    }
});
//get stuff
app.get('/josephssexuality', function(req, res){
    res.send('lol gay');
});

app.get('/client/guilds.php', function(req, res){
    var sql = require('mysql');
    //https://www.tutorialsteacher.com/nodejs/access-sql-server-in-nodejs
    var config = {
        user:'sql2291275',
        password: 'xV5%tZ3!',
        server: "sql12.freesqldatabase.com",
        database: 'sql2291275'
    };
    
    sql.connect(config, function(err){
        if (err) console.log(err);
        
        var request = new sql.Request();
        request.query('select * from guilds', function(err, recordset){
            if (err) console.log(err);
            res.send(recordset);
        });
    });
});
app.get('/question/iskamalstraight', function(req, res){
    res.send('no')
});

const port = process.env.PORT || 3306
//Start listening
const server = app.listen(port, function () {
   console.log("App listening at ${host}")
});
