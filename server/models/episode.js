

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
        /*
        connection.query('Select MAX(numeroEpisode) AS nb, saison FROM Episode WHERE idSerie = ? GROUP BY saison', [req.body.idSerie], function (err, rows, fields) {
            if (err) {
                console.log(err);
                return res.status(500).json('erreur insertSerie');
            }
            console.log("Requete MAx Serie effectuée");
            console.log(rows[0]);

            nb = rows[0].nb + 1;
            console.log('nb MAX: ' + nb);

            if(req.body.saison !== rows[0].saison){
                nb = 1;
            }*/

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



    //});
}


module.exports.deleteSerie = function (req, idSerie, callback) {
    console.log("idSerie:" + idSerie);
    req.getConnection(function (err, connection) {
        var sql = "DELETE from Serie WHERE idSerie = ?";
        var sqlS = "DELETE FROM regarder WHERE idSerie = ?";
        connection.query(sqlS, [idSerie], function (err, rows, fields) {
            if (err) {
                console.log(err);
                return res.status(300).json("Impossible de supprimer la serie");
            }
            console.log("Requete deleteSerie OK");
            console.log(rows);
            callback(rows[0]);
        });
        connection.query(sql, [idSerie], function (err, rows, fields) {
            if (err) {
                console.log(err);
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
}