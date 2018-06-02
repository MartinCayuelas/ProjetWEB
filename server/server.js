// server.js

require('dotenv').config(); // Pour les variables d'environnements (tel que connection BD)

var express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  morgan = require('morgan');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

var sqlinjection = require('sql-injection');
app.use(sqlinjection);
const port = process.env.PORT || 4000;


// requires
//require('./config/db');


const mysql = require('mysql');
myConnection = require('express-myconnection'); // express-myconnection module

dbOptions = {
  host: 'nr84dudlpkazpylz.chr7pe7iynqr.eu-west-1.rds.amazonaws.com',
  user: 'm70cp3bierr5oleb',
  password: 'hkqinov15do19ga0',
  database: 'zvsccp6ratwxtz9x',
};

app.use(myConnection(mysql, dbOptions, 'single'));





app.use(bodyParser.json());
app.use(cors());


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
