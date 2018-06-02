

module.exports.getAllCritiques = function (req, idSerie, callback) {
    req.getConnection(function (err, connection) {
        connection.query('select idCritique, note, commentaire, idSerie, Utilisateur.login from Critique, Utilisateur where Utilisateur.idUser = Critique.idUser AND idSerie = ? ORDER BY idCritique', [idSerie], function (err, rows, fields) {
            if (err) {
                console.log(err);
                return err.status(500).json("Impossible de récupérer les critiques");
            }
            callback(rows);
        });
    });
}

module.exports.insertCritique = function (req, idUser,callback) {
    let queryInsert = "INSERT INTO Critique (idCritique, note, commentaire, idUser, idSerie) VALUES (NULL, ?, ?,?, ?)";
    const crit = [

        req.body.note,
        req.body.commentaire,
        idUser,
        req.body.idSerie,
       
    ]
    req.getConnection(function (err, connection) {
        connection.query(queryInsert, crit, function (err, rows, fields) {
            if (err) {
                console.log(err);
                return err.status(500).json('erreur insertCrit');
            }
            callback(rows);
        });

    });
}

module.exports.deleteCritique = function (req, idC, callback) {
    let queryDelete = "DELETE FROM Critique WHERE idCritique = ?";
    req.getConnection(function (err, connection) {
        connection.query(queryDelete, [idC], function (err, rows, fields) {
            if (err) {
                console.log(err);
                return err.status(500).json('erreur delete');
            }
            callback(rows[0]);
        });

    });
}


