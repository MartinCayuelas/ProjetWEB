

module.exports.getAllSeries = function (req, callback) {
    req.getConnection(function (err, connection) {
        connection.query('select * from Serie ORDER BY titre', function (err, rows, fields) {
            if (err) {
                console.log(err);
                return err.status(500).json("Impossible de récupérer les series");
            }
            callback(rows);
        });
    });
}

module.exports.getAllSeriesNb = function (req, callback) {
    req.getConnection(function (err, connection) {
        connection.query('select COUNT(*) AS nb from Serie', function (err, rows, fields) {
            if (err) {
                console.log(err);
                return err.status(500).json("Impossible de récupérer les series");
            }
            callback(rows[0]);
        });
    });

}

// Récupère les nouveautés

module.exports.getAllSeriesNews = function (req, callback) {
    req.getConnection(function (err, connection) {
        connection.query('select * from Serie ORDER BY dateSortie DESC LIMIT 3', function (err, rows, fields) {
            if (err) {
                console.log(err);
                return err.status(500).json("Impossible de récupérer les nouveautés");
            }
            callback(rows);
        });
    });

}

// Récupère les 3 séries les plus vus

module.exports.getAllSeriesTop = function (req, callback) {
    req.getConnection(function (err, connection) {
        connection.query('SELECT Serie.titre, Serie.imageSerie, Serie.idSerie, COUNT(*) as nbVu FROM Serie, regarder WHERE Serie.idSerie = regarder.idSerie GROUP BY Serie.titre, Serie.imageSerie, Serie.idSerie ORDER BY nbVu DESC LIMIT 3', function (err, rows, fields) {
            if (err) {
                console.log(err);
                return err.status(500).json("Impossible de récupérer les nouveautés");
            }
            callback(rows);
        });
    });

}


module.exports.getNbEpisodesBySerie = function (req, idSerie, callback) {
    req.getConnection(function (err, connection) {
        connection.query('select Episode.idSerie, COUNT(*) AS nbEpisodes from Episode where idSerie = ?', [idSerie], function (err, rows, fields) {
            if (err) {
                return err.status(500).json("Impossible de récupérer le nombre d'épiodes");
            }
            callback(rows[0]);
        });
    });
}

// Récupère les episodes vus par l'utilisateur

module.exports.getEpisodesSeen = function (req, idSerie, callback) {
    const ep = [
        req.body.login,
        idSerie,
    ]
    req.getConnection(function (err, connection) {
        connection.query('select * from Episode,visionne, Utilisateur where Utilisateur.idUser = visionne.idUser AND Episode.idEpisode = visionne.idEpisode AND Utilisateur.login = ? AND Episode.idSerie = ? GROUP BY saison, numeroEpisode', ep, function (err, rows, fields) {
            if (err) {
                return err.status(500).json("Impossible de récupérer les Episodes");
            }
            callback(rows);
        });
    });
}

// Récupère les episodes non vus par l'utilisateur

module.exports.getEpisodesNotSeen = function (req, idSerie, callback) {
    const ep = [
        idSerie,
        req.body.login,
        idSerie,
    ]
    req.getConnection(function (err, connection) {
        connection.query('SELECT * FROM Episode WHERE Episode.idSerie = ? AND Episode.idEpisode NOT IN (SELECT e.idEpisode  FROM Episode e, visionne, Utilisateur WHERE Utilisateur.login = ? AND Utilisateur.idUser = visionne.idUser AND visionne.idEpisode = e.idEpisode AND e.idSerie = ?) GROUP BY saison, numeroEpisode', ep, function (err, rows, fields) {
            if (err) {
                console.log('Error' + err);
                return err.status(500).json("Impossible de récupérer les Episodes");
            }
            callback(rows);
        });
    });
}














module.exports.getSerieById = function (req, idSerie, callback) {
    req.getConnection(function (err, connection) {
        connection.query('select * from Serie where idSerie = ?', [idSerie], function (err, rows, fields) {
            if (err) {
                console.log(err);
                return err.status(500).json("Impossible de récupérer les series");
            }
            callback(rows[0]);
        });
    });
}



module.exports.insertSerie = function (req, callback) {
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
        connection.query(queryInsert, serie, function (err, rows, fields) {
            if (err) {
                console.log(err);
                return err.status(500).json('erreur insertSerie');
            }
            callback(rows);
        });

    });
}


module.exports.deleteSerie = function (req, idSerie, callback) {
    req.getConnection(function (err, connection) {
        var sql = "DELETE FROM Serie WHERE idSerie = ?";
        var sqlR = "DELETE FROM regarder WHERE idSerie = ?";
        var sqlE = "DELETE FROM Episode WHERE idSerie = ?";
        var sqlV = 'DELETE FROM visionne WHERE idEpisode IN (SELECT episode.idEpisode FROM episode WHERE idSerie=?)';
        
        connection.query(sqlV, [idSerie], function (err, rows, fields) {
            if (err) {
                console.log(err);
                return err.status(500).json("Impossible de supprimer la serie");
            }
            callback(rows[0]);
        });
        connection.query(sqlR, [idSerie], function (err, rows, fields) {
            if (err) {
                console.log(err);
                return err.status(500).json("Impossible de supprimer la serie");
            }
            callback(rows[0]);
        });
        connection.query(sqlE, [idSerie], function (err, rows, fields) {
            if (err) {
                console.log(err);
                return err.status(500).json("Impossible de supprimer la serie");
            }
            callback(rows[0]);
        });
        connection.query(sql, [idSerie], function (err, rows, fields) {
            if (err) {
                console.log(err);
                return err.status(500).json("Impossible de supprimer la serie");
            }
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
                return err.status(500).json("Impossible de modifier la serie");
            }
            callback(rows[0]);
        });
    });
}