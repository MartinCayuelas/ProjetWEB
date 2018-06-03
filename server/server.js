// server.js

require('dotenv').config(); // Pour les variables d'environnements (tel que connection BD)

var express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const port = process.env.PORT || 4000;



// requires
//require('./config/db');


const mysql = require('mysql');
myConnection = require('express-myconnection'); // express-myconnection module

dbOptions = {
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASS,
  database: process.env.DATABASE,
};

app.use(myConnection(mysql, dbOptions, 'single'));



// router
var api = require('./routes/mainRouteur');
// routes
app.use('/api/', api);



app.use(express.static(path.join(__dirname, '../dist')));
app.get('*', function (req, res, next) {
  
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});





const server = app.listen(port, function () {
  console.log('Listening on port ' + port);
});

module.exports = app;
