
var jwt = require('jsonwebtoken')




module.exports.getAllUsers = function (req, callback) {
    req.getConnection(function (err, connection) {
        connection.query('select * from Utilisateur', function (err, rows, fields) {
            if (err) {
                console.log(err);
                return err.status(500).json("Impossible de récupérer les users");
            }
            callback(rows);
        });
    });
}


module.exports.getAllUsersNb = function (req, callback) {
    req.getConnection(function (err, connection) {
        connection.query('select COUNT(*) AS nb from Utilisateur', function (err, rows, fields) {
            if (err) {
                console.log(err);
                return err.status(500).json("Impossible de récupérer les utils (NB)");
            }
            callback(rows[0]);
        });
    });

}

module.exports.deleteUser = function (req, idUser,callback) {
    req.getConnection(function (err, connection) {
        var sql = "DELETE FROM utilisateur WHERE idUser = ?";
        var sqlV = "DELETE FROM visionne WHERE idUser = ?";
        var sqlR = "DELETE FROM regarder WHERE idUser = ?";
        var sqlC = "DELETE FROM critique WHERE idUser = ?";
        connection.query(sqlV, [idUser], function (err, rows, fields) {
            if (err) {
                console.log(err);
                return err.status(500).json("Impossible de supprimer l'utilisateur");
            }
            callback(rows[0]);
        });
        connection.query(sqlC, [idUser], function (err, rows, fields) {
            if (err) {
                console.log(err);
                return err.status(500).json("Impossible de supprimer l'utilisateur");
            }
            callback(rows[0]);
        });
        connection.query(sqlR, [idUser], function (err, rows, fields) {
            if (err) {
                console.log(err);
                return err.status(500).json("Impossible de supprimer l'utilisateur");
            }
            callback(rows[0]);
        });
        connection.query(sql, [idUser], function (err, rows, fields) {
            if (err) {
                console.log(err);
                return err.status(500).json("Impossible de supprimer l'utilisateur");
            }
            callback(rows[0]);
        });
    });
}

// Epsiodes

module.exports.addVision = function (req, idUser, callback) {
    let queryInsert = "INSERT INTO visionne VALUES (?, ?)";
    const ep = [
        idUser,
        req.body.idE,

    ]
    req.getConnection(function (err, connection) {
        connection.query(queryInsert, ep, function (err, rows, fields) {
            if (err) {
                console.log(err);
                return res.status(500).json('erreur Insertion');
            }
            callback(rows);
        });

    });
}

module.exports.removeVision = function (req, idUser, callback) {
    const ep = [
        idUser,
        req.params.idE,

    ]
    req.getConnection(function (err, connection) {
        var sqlS = "DELETE FROM visionne WHERE idUser = ? AND idEpisode = ?";
        connection.query(sqlS, ep, function (err, rows, fields) {
            if (err) {
                console.log(err);
                return err.status(500).json("Impossible de supprimer le visionnage");
            }
            callback(rows[0]);
        });
    });
}


// Series

module.exports.addRegarder = function (req, idUser, callback) {
    let queryInsert = "INSERT INTO regarder VALUES (?, ?)";
    const serie = [
        req.body.idSerie,
        idUser,


    ]
    req.getConnection(function (err, connection) {
        connection.query(queryInsert, serie, function (err, rows, fields) {
            if (err) {
                console.log(err);
                return res.status(500).json('erreur Insertion');
            }
            callback(rows);
        });

    });
}

module.exports.removeRegarder = function (req, idUser, callback) {
    const serie = [
        req.params.idSerie,
        idUser,
    ]
    req.getConnection(function (err, connection) {
        var sqlR = 'DELETE FROM visionne WHERE idEpisode IN (SELECT episode.idEpisode FROM episode WHERE idSerie=?) AND idUser = ?'
        var sqlS = "DELETE FROM regarder WHERE idSerie = ? AND idUser = ?";
        connection.query(sqlR, serie, function (err, rows, fields) {
            if (err) {
                console.log(err);
                return err.status(500).json("Impossible de supprimer le 'regardage' de serie");
            }
            callback(rows[0]);
        });
       connection.query(sqlS, serie, function (err, rows, fields) {
            if (err) {
                console.log(err);
                return err.status(500).json("Impossible de supprimer le 'regardage' de serie");
            }
            callback(rows[0]);
        });
    });
}



module.exports.isSeenSerie = function (req, idUser, callback) {
    const serie = [
        idUser,
        req.params.idSerie,
    ]
    req.getConnection(function (err, connection) {
        connection.query('SELECT regarder.idUser, COUNT(*) AS vu  from regarder WHERE  regarder.idUser = ? AND regarder.idSerie = ?', serie, function (err, rows, fields) {
            if (err) {
                console.log(err);
                return err.status(500).json("Impossible de récupérer le isSeen");
            }
            callback(rows[0]);
        });
    });
}


module.exports.getUserById = function (req, idUser, callback) {
    req.getConnection(function (err, connection) {
        connection.query('select * from Utilisateur where idUser = ?', [idUser], function (err, rows, fields) {
            if (err) {
                console.log(err);
                return err.status(500).json("Impossible de récupérer l'utilisateur");
            }
            callback(rows[0]);
        });
    });
}

module.exports.getRoleByLogin = function (req, login, callback) {
    req.getConnection(function (err, connection) {
        connection.query('select role from Utilisateur where login = ?', [login], function (err, rows, fields) {
            if (err) {
                console.log(err);
                return res.status(500).json("Impossible de récupérer le role");
            }
            callback(rows[0]);
        });
    });
}

          
module.exports.getUserByLogin = function (req, login, callback) {
    req.getConnection(function (err, connection) {
        connection.query('select * from Utilisateur where login = ?', [login], function (err, rows, fields) {
            if (err) {
                console.log(err);
                return err.status(500).json("Impossible de récupérer l'utilisateur");
            }
            callback(rows[0]);
        });
    });
}



module.exports.getPlayList = function (req, idUser, callback) {
    req.getConnection(function (err, connection) {
        connection.query('select * from Serie, regarder where Serie.idSerie=regarder.idSerie AND regarder.idUser = ?', [idUser], function (err, rows, fields) {
            if (err) {
                console.log(err);
                return err.status(500).json("Impossible de playList");
            }
            callback(rows);
        });
    });
}

//On recupère les épisodes non vu  par l'utilisateur idUser de la série idSerie 
module.exports.getNbEpisodesBySerieByUser = function (req, idSerie, idUser, callback) {
    const serie = [
        idSerie,
        idUser
    ]
    req.getConnection(function (err, connection) {
        connection.query('select COUNT(*) AS vu from visionne, Episode where visionne.idEpisode=Episode.idEpisode AND Episode.idSerie = ? AND visionne.idUser = ?', serie, function (err, rows, fields) {
            if (err) {
                console.log(err);
                return err.status(500).json("Internal error");
            }
           callback(rows[0]);
        });
    });
}

module.exports.getNbSeriesById = function (req, idUser, callback) {
    req.getConnection(function (err, connection) {
        connection.query('SELECT regarder.idUser, COUNT(*) AS nbVus  from regarder WHERE  regarder.idUser = ?', [idUser], function (err, rows, fields) {
            if (err) {
                console.log(err);
                return err.status(500).json("Impossible de récupérer les séries (NB) de l'utilisateur");
            }
            callback(rows[0]);
        });
    });
}


module.exports.getNbEpisodesById = function (req, idUser, callback) {
    req.getConnection(function (err, connection) {
        connection.query('SELECT visionne.idUser, COUNT(*) AS nbVus  from  visionne WHERE  visionne.idUser = ?', [idUser], function (err, rows, fields) {
            if (err) {
                console.log(err);
                return err.status(500).json("Impossible de récupérer les episodes (NB) User");
            }
            if (rows[0].idUser === null) {
                rows[0].idUser = 0;
            }
            callback(rows[0]);
        });
    });
}
