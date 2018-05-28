
module.exports.getAllSeries = function(req, callback) {
    req.getConnection(function (err, connection) { 
        connection.query('select * from Serie ORDER BY titre', function(err, rows, fields) {
            if (err) {
                console.log (err);
                return res.status(300).json("Impossible de récupérer les series");
            }
            console.log("Requete getAllSeries effectuée");
            console.log(rows);
            callback(rows);
        });
    }); 
}

module.exports.getAllSeriesNb = function(req, callback) {
    req.getConnection(function (err, connection) { 
        connection.query('select COUNT(*) AS nb from Serie', function(err, rows, fields) {
            if (err) {
                console.log (err);
                return res.status(300).json("Impossible de récupérer les series");
            }
            console.log("Requete getAllSeries effectuée");
            console.log(rows);
            callback(rows[0]);
        });
    }); 

}

module.exports.getAllSeriesNews = function(req, callback) {
    req.getConnection(function (err, connection) { 
        connection.query('select * from Serie ORDER BY dateSortie DESC LIMIT 3', function(err, rows, fields) {
            if (err) {
                console.log (err);
                return res.status(300).json("Impossible de récupérer les nouveautés");
            }
            console.log("Requete getAllSeries effectuée");
            console.log(rows);
            callback(rows);
        });
    }); 

}
module.exports.getAllSeriesTop = function(req, callback) {
    req.getConnection(function (err, connection) { 
        connection.query('SELECT Serie.titre, Serie.imageSerie, Serie.idSerie, COUNT(*) as nbVu FROM Serie, regarder WHERE Serie.idSerie = regarder.idSerie GROUP BY Serie.titre, Serie.imageSerie, Serie.idSerie ORDER BY nbVu DESC LIMIT 3', function(err, rows, fields) {
            if (err) {
                console.log (err);
                return res.status(300).json("Impossible de récupérer les nouveautés");
            }
            console.log("Requete getAllSeries TOPs effectuée");
            console.log(rows);
            callback(rows);
        });
    }); 

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



module.exports.insertSerie = function(req, callback) {
    console.log("Requete SerieInsert incoming...");
    let queryInsert = "INSERT INTO Serie VALUES (NULL, ?, ?, ?, ?, ?, ?, ?, ?)";
    const serie = [
       
        req.body.titre,
        req.body.dateSortie,
        req.body.nomRealisateur,
        req.body.prenomRealisateur,
        req.body.nbEpisodes,
        req.body.nbSaisons,
        req.body.description,
        req.body.imageSerie
    ]
    req.getConnection(function (err, connection) { 
        connection.query(queryInsert, serie, function(err, rows, fields) {
            if (err) { 
                console.log (err);
                return res.status(500).json('erreur insertSerie');
            }
            console.log("Requete Insert Serie effectuée");
           callback(rows);
        });
         
    }); 
}


module.exports.deleteSerie = function (req, idSerie, callback) {
    console.log("idSerie:" + idSerie);
  req.getConnection(function(err, connection){
    var sql = "DELETE from Serie WHERE idSerie = ?";
    var sqlS = "DELETE FROM regarder WHERE idSerie = ?";
    connection.query(sqlS, [idSerie], function(err, rows, fields) {
        if (err) {
            console.log (err);
            return res.status(300).json("Impossible de supprimer la serie");
        }
        console.log("Requete deleteSerie OK");
        console.log(rows);
        callback(rows[0]);
    });
      connection.query(sql, [idSerie], function(err, rows, fields) {
          if (err) {
              console.log (err);
              return res.status(300).json("Impossible de supprimer la serie");
          }
          console.log("Requete deleteSerie OK");
          console.log(rows);
          callback(rows[0]);
      });
  });
}

module.exports.updateSerie = function (req, idSerie, callback) {
    let queryD = "UPDATE Serie SET imageSerie = ?, nbEpisodes = ?, nbSaisons = ?, description = ? WHERE idSerie = ?";
    const serie = [
        req.body.imageSerie,
        req.body.nbEpisodes,
        req.body.nbSaisons,
        req.body.description,
        idSerie
        
    ]
  req.getConnection(function(err, connection){

    connection.query(queryD, serie, function(err, rows, fields) {
        if (err) {
            console.log (err);
            return res.status(300).json("Impossible de modifier la serie");
        }
        console.log("Requete updateSerie OK");
        console.log(rows);
        callback(rows[0]);
    });
  });
}