//var boom = require('boom');

// list of the error messages
let UNAUTHORIZED_USER = "Unauthorized user";
let NOT_FOUND = "Serie not found";



/**
 * get_all
 *
 * get all the tags
 * @param req : get request, without params.
 *
 * @return Json with all the questions.
 */
module.exports.getAllSeries = function(req, callback) {
    req.getConnection(function (err, connection) { 
        connection.query('select * from Serie', function(err, rows, fields) {
            if (err) {
                console.log (err);
                return res.status(300).json("Impossible de récupérer les series");
            }
            console.log("Requete getAllSeries effectuée");
            console.log(rows);
            callback(rows);
        });
    }); 

    


    /*

  Tag.find( function (err, questions) {
    if (err) {
      return next(boom.notFound(NOT_FOUND)); //status 409
    }
    else {
      res.status(200);
      res.json(questions);
      return res;
    }
  });*/
}

module.exports.getSerieById = function (req, idSerie, callback) {
    console.log("idSerie:" + idSerie);
  req.getConnection(function(err, connection){
      connection.query('select * from Serie where idSerie = ?', [idSerie], function(err, rows, fields) {
          if (err) {
              console.log (err);
              return res.status(300).json("Impossible de récupérer les series");
          }
          console.log("Requete getSerie by ID OK");
          console.log(rows);
          callback(rows[0]);
      });
  });
}






