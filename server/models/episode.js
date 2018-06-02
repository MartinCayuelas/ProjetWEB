

module.exports.getAllEpisodes = function (req, idSerie, callback) {
    console.log("GET ALL Episodes");
    console.log("idSerie:" + idSerie);
    req.getConnection(function (err, connection) {
        connection.query('select * from Episode where idSerie = ? ORDER BY saison, numeroEpisode', [idSerie], function (err, rows, fields) {
            if (err) {
                console.log(err);
                return res.status(300).json("Impossible de récupérer les episodes");
            }
            console.log("Requete getEpisodes OK");
            console.log(rows);
            callback(rows);
        });
    });
}




module.exports.insertEpisode = function (req, callback) {

    console.log('Name Ep: ' + req.body.nomEpisode);
    console.log('Saison Ep: ' + req.body.saison);
    console.log('IdSerie Ep: ' + req.body.idSerie);
    // let nb;

    req.getConnection(function (err, connection) {

        console.log("Requete EpisodeInsert incoming...");
        let queryInsert = "INSERT INTO Episode VALUES (NULL, ?, 1, ?, ?)";
        const ep = [

            req.body.nomEpisode,
            req.body.saison,
            req.body.idSerie,
        ]
        connection.query(queryInsert, ep, function (err, rows, fields) {
            if (err) {
                console.log(err);
                return res.status(500).json('erreur insertSerie');
            }
            console.log("Requete Insert Serie effectuée");
            callback(rows);
        });
    });
}



module.exports.deleteEpisode = function (req, idEpisode, callback) {
    console.log("idEp:" + idEpisode);
    req.getConnection(function (err, connection) {
        var sql = "DELETE from episode WHERE idEpisode = ?";
        var sqlE = "DELETE FROM visionne WHERE idEpisode = ?";  // suppressiond ans visionne également (Foreign KEy)
        connection.query(sqlE, [idEpisode], function (err, rows, fields) {
            if (err) {
                console.log(err);
                return res.status(300).json("Impossible de supprimer l'épisode'");
            }
            console.log("Requete deleteEpisode OK");
            console.log(rows);
            callback(rows[0]);
        });
        connection.query(sql, [idEpisode], function (err, rows, fields) {
            if (err) {
                console.log(err);
                return res.status(300).json("Impossible de supprimer l'épisode");
            }
            console.log("Requete deleteEpisode OK");
            console.log(rows);
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