// server.js

var express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  morgan = require('morgan'),
  passport = require('passport');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(passport.initialize());

const port = process.env.PORT || 4000;


// requires
//require('./config/db');


const mysql = require('mysql');
myConnection = require('express-myconnection'); // express-myconnection module

dbOptions = {
  host: 'localhost',
  user: 'root',
  password: '**',
  database: 'watchSeries'
};

app.use(myConnection(mysql, dbOptions, 'single'));





app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());


// router
var api = require('./routes/mainRouteur');
// routes
app.use('/api/', api);




app.use(express.static(path.join(__dirname, '../dist')));
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});


//const routes = require('./routers');

//  Connect all our routes to our application
//app.use('/', routes);



const server = app.listen(port, function () {
  console.log('Listening on port ' + port);
});

module.exports = app;
