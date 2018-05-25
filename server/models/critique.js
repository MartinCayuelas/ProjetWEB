

module.exports.getAllCritiques = function (req, idSerie, callback) {
    console.log("GET ALL Critiques");
    console.log("idSerie:" + idSerie);
    req.getConnection(function (err, connection) {
        connection.query('select * from Critique where idSerie = ? ORDER BY idCommentaire', [idSerie], function (err, rows, fields) {
            if (err) {
                console.log(err);
                return res.status(300).json("Impossible de récupérer les critiques");
            }
            console.log("Requete critiquesGET OK");
            console.log(rows);
            callback(rows);
        });
    });
}

module.exports.insertCritique = function (req, callback) {
    console.log("Requete critInsert incoming...");
    let queryInsert = "INSERT INTO Critique (idCommentaire, note, commentaire, idSerie) VALUES (NULL, ?, ?, ?)";
    const crit = [

        req.body.note,
        req.body.commentaire,
        req.body.idSerie
    ]
    console.log('Note: ' + req.body.note);
    console.log('comme: ' + req.body.commentaire);
    req.getConnection(function (err, connection) {
        connection.query(queryInsert, crit, function (err, rows, fields) {
            if (err) {
                console.log(err);
                return res.status(500).json('erreur insertCrit');
            }
            console.log("Requete Insert crit effectuée");
            callback(rows);
        });

    });
}