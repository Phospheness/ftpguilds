const express = require('express');
const {Client} = require('pg');

const client = new Client({
    connectionString: process.env.DATABASE_URL
});

client.connect();

const bodyParser = require('body-parser');
const app = express();

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'sql2.freesqldatabase.com',
    user: 'sql2291504',
    password: 'sI9!pB4%',
    database: 'sql2291504'
});

app.use(bodyParser.json());
//get stuff
app.get('/josephssexuality', function(req, res){
    res.send('lol gay');
});

app.get('/islawagay', function(req, res){
    res.send('FUXCK LAWA DUMB N WORD FAGGOT NOOB STUPID');
});

app.get('/client/guilds.php', function(req, res){
    connection.connect();  

    connection.query('SELECT * FROM guilds', function(err, rows, fields){  
        connection.end();
        if (err) throw err;  
        res.send(rows); 
    });
});

app.get('/lol=:id', function(req, res){
    var lol = req.params.id;
    res.send('id: ' + lol);
});


const port = process.env.PORT || 3306
//Start listening
const server = app.listen(port, function () {
   console.log("App listening at ${host}")
});
