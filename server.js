const express = require('express');
const {Client} = require('pg');

const client = new Client({
  connectionString: process.env.ftp-guilds.herokuapp.com
});

client.connect();

const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

app.post('/guilds', (req, res) => {
  res.SetHeader('Content-Type', 'application/json');
  //console.log("currently recieveing the request because joseph is gay");
  if(req.body.query){
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

const port = prosess.evn.PORT || 8080;
const.server = app.listen(port, function() {
  console.log("app listening at ${host}")
});


