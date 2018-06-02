

module.exports.getAllEpisodes = function (req, idSerie, callback) {
    req.getConnection(function (err, connection) {
        connection.query('select * from Episode where idSerie = ? ORDER BY saison, numeroEpisode', [idSerie], function (err, rows, fields) {
            if (err) {
                console.log(err);
                return err.status(500).json("Impossible de récupérer les episodes");
            }
            callback(rows);
        });
    });
}




module.exports.insertEpisode = function (req, callback) {


    req.getConnection(function (err, connection) {

        let queryInsert = "INSERT INTO Episode VALUES (NULL, ?, 1, ?, ?)";
        const ep = [

            req.body.nomEpisode,
            req.body.saison,
            req.body.idSerie,
        ]
        connection.query(queryInsert, ep, function (err, rows, fields) {
            if (err) {
                console.log(err);
                return err.status(500).json('erreur insertSerie');
            }
            callback(rows);
        });
    });
}



module.exports.deleteEpisode = function (req, idEpisode, callback) {
    req.getConnection(function (err, connection) {
        var sql = "DELETE from episode WHERE idEpisode = ?";
        var sqlE = "DELETE FROM visionne WHERE idEpisode = ?";  // suppressiond ans visionne également (Foreign KEy)
        connection.query(sqlE, [idEpisode], function (err, rows, fields) {
            if (err) {
                console.log(err);
                return err.status(500).json("Impossible de supprimer l'épisode'");
            }
            callback(rows[0]);
        });
        connection.query(sql, [idEpisode], function (err, rows, fields) {
            if (err) {
                console.log(err);
                return err.status(500).json("Impossible de supprimer l'épisode");
            }
            callback(rows[0]);
        });
    });
}

/*
module.exports.updateEpisode = function (req, idSerie, callback) {
    let queryD = "UPDATE Serie SET imageSerie = ?, nbEpisodes = ?, nbSaisons = ?, description = ? WHERE idSerie = ?";
    const serie = [
        req.body.imageSerie,
        req.body.nbEpisodes,
        req.body.nbSaisons,
        req.body.description,
        idSerie

    ]
    req.getConnection(function (err, connection) {

        connection.query(queryD, serie, function (err, rows, fields) {
            if (err) {
                console.log(err);
                return res.status(300).json("Impossible de modifier la serie");
            }
            console.log("Requete updateSerie OK");
            console.log(rows);
            callback(rows[0]);
        });
    });
}*/