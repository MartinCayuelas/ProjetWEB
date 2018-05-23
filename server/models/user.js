module.exports.getAllUsers = function(req, callback) {
    req.getConnection(function (err, connection) { 
        connection.query('select * from Utilisateur', function(err, rows, fields) {
            if (err) {
                console.log (err);
                return res.status(300).json("Impossible de récupérer les users");
            }
            console.log("Requete getAllUsers effectuée");
            callback(rows);
        });
    }); 
}

module.exports.signUp = function(req, callback) {
    console.log("Requete UserInsert incoming...");
    let queryInsert = "INSERT INTO Utilisateur VALUES (NULL, ?, ?, ?, ?, ?, ?, ?, 0)";
    const user = [

        req.body.login,
        req.body.prenom,
        req.body.nom,
        req.body.password,
        req.body.email,
        '2017-05-27',
        req.body.avatar
    ]
    req.getConnection(function (err, connection) { 
        connection.query(queryInsert, user, function(err, rows, fields) {
            if (err) { 
                console.log (err);
                return res.status(500).json('erreur inscription');
            }
            console.log("Requete Insert User effectuée");
           callback(rows);
        });
         
    }); 
}

module.exports.getUserById = function (req, idUser, callback) {
    console.log("iduser:" + idUser);
    req.getConnection(function(err, connection){
      connection.query('select * from Utilisateur where idUser = ?', [idUser], function(err, rows, fields) {
          if (err) {
              console.log (err);
              return res.status(300).json("Impossible de récupérer l'utilisateur");
          }
          console.log("Requete getUser by ID OK");
          console.log(rows);
          callback(rows[0]);
      });
  });
}


module.exports.getNbSeriesById = function (req, idUser, callback) {
    console.log("iduser:" + idUser);
    req.getConnection(function(err, connection){
      connection.query('SELECT COUNT(*) AS nbSeriesVus from regarder, visionne WHERE  regarder.idUser = ?', [idUser], function(err, rows, fields) {
          if (err) {
              console.log (err);
              return res.status(300).json("Impossible de récupérer l'utilisateur");
          }
          console.log("Requete getUser by ID OK");
          console.log(rows);
          callback(rows[0]);
      });
  });
}
