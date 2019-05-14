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
    database: 'sql2291504',
    multipleStatements: true
});

app.use(bodyParser.json());
//get stuff
app.get('/josephssexuality', function(req, res){
    res.send('lol gay');
});

app.get('/islawagay', function(req, res){
    res.send('FUXCK LAWA DUMB N WORD FAGGOT NOOB STUPID');
});

app.get('/client/groups.php', function(req, res){
    connection.connect();  
    connection.query('SELECT * FROM `guilds`', function(err, rows, fields){  
        //connection.end();
        if (err) throw err;  
        res.json(rows); 
    });
});
app.get('/client/getgroupinfo.php', function(req, res){
    var Lawa = req.query.gid;
    connection.connect();
    connection.query('SELECT * FROM `guilds` WHERE `id` = ' + Lawa, function(err, rows,fields){
       // connection.end();
        if (err) throw err;
        res.json(rows);
    });
});
app.get('/client/isingroup.php', function(request, results){
    var Lawa = request.query.gid;
    var Zubair = request.query.pid;
    connection.connect();
    connection.query('SELECT * FROM `'+Lawa+'-Members` WHERE `id` = ' + Zubair, function(err, rows, fields){
        if(err) throw err;
        results.json(rows);
    });
});
//IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'guilds') BEGIN PRINT 'YES' END

const port = process.env.PORT || 3306
//Start listening
const server = app.listen(port, function () {
   console.log("App listening at ${host}")
});
