
var bcrypt = require('bcrypt');
var jwt = require ('jsonwebtoken')

module.exports.getAllUsers = function (req, callback) {
    req.getConnection(function (err, connection) {
        connection.query('select * from Utilisateur', function (err, rows, fields) {
            if (err) {
                console.log(err);
                return res.status(300).json("Impossible de récupérer les users");
            }
            console.log("Requete getAllUsers effectuée");
            callback(rows);
        });
    });
}


module.exports.getAllUsersNb = function (req, callback) {
    req.getConnection(function (err, connection) {
        connection.query('select COUNT(*) AS nb from Utilisateur', function (err, rows, fields) {
            if (err) {
                console.log(err);
                return res.status(300).json("Impossible de récupérer les utils (NB)");
            }
            console.log("Requete getAlluserNB effectuée");
            console.log(rows);
            callback(rows[0]);
        });
    });

}

module.exports.addVision = function (req, callback) {
    console.log("Requete addVision incoming...");
    let queryInsert = "INSERT INTO visionne VALUES (?, ?)";
    const ep = [
        req.body.idUser,
        req.body.idE,

    ]
    req.getConnection(function (err, connection) {
        connection.query(queryInsert, ep, function (err, rows, fields) {
            if (err) {
                console.log(err);
                return res.status(500).json('erreur Insertion');
            }
            console.log("Requete Insert Vision effectuée");
            callback(rows);
        });

    });
}

module.exports.removeVision = function (req, callback) {
    const ep = [
        req.body.idUser,
        req.body.idE,

    ]
    req.getConnection(function (err, connection) {

        var sqlS = "DELETE FROM visionne WHERE idUser = ? AND idEpisode = ?";
        connection.query(sqlS, ep, function (err, rows, fields) {
            if (err) {
                console.log(err);
                return res.status(300).json("Impossible de supprimer le visionnage");
            }
            console.log("Requete deleteVision OK");
            console.log(rows);
            callback(rows[0]);
        });
    });
}

module.exports.getUserById = function (req, idUser, callback) {
    console.log("iduser:" + idUser);
    req.getConnection(function (err, connection) {
        connection.query('select * from Utilisateur where idUser = ?', [idUser], function (err, rows, fields) {
            if (err) {
                console.log(err);
                return res.status(300).json("Impossible de récupérer l'utilisateur");
            }
            console.log("Requete getUser by ID OK");
            console.log(rows);
            callback(rows[0]);
        });
    });
}


module.exports.getUserByLogin = function (req, login, callback) {
    console.log("LoginUser:" + login);
    req.getConnection(function (err, connection) {
        connection.query('select * from Utilisateur where login = ?', [login], function (err, rows, fields) {
            if (err) {
                console.log(err);
                return res.status(300).json("Impossible de récupérer l'utilisateur");
            }
          //  console.log("Requete getUser by ID OK");
           // console.log(rows);
            callback(rows[0]);
        });
    });
}



module.exports.getPlayList = function (req, idUser, callback) {
    console.log("GetPlayList:" + idUser);
    req.getConnection(function (err, connection) {
        connection.query('select * from Serie, regarder where Serie.idSerie=regarder.idSerie AND regarder.idUser = ?', [idUser], function (err, rows, fields) {
            if (err) {
                console.log(err);
                return res.status(300).json("Impossible de playList");
            }
            console.log("Requete Playlist OK");
            console.log(rows);
            callback(rows);
        });
    });
}

//On recupère les épisodes non vu  par l'utilisateur idUser de la série idSerie 
module.exports.getEpisodesNotSeenSerieUser = function (req, idUser, callback) {
    console.log("GetPlayList:" + idUser);
    req.getConnection(function (err, connection) {
        connection.query('select * from Serie, regarder where Serie.idSerie=regarder.idSerie AND regarder.idUser = ?', [idUser], function (err, rows, fields) {
            if (err) {
                console.log(err);
                return res.status(300).json("Impossible de playList");
            }
            console.log("Requete Playlist OK");
            console.log(rows);
            callback(rows);
        });
    });
}

module.exports.getNbSeriesById = function (req, idUser, callback) {
    console.log("iduser getNbSeriesById:" + idUser);
    req.getConnection(function (err, connection) {
        connection.query('SELECT regarder.idUser, COUNT(*) AS nbVus  from regarder WHERE  regarder.idUser = ?', [idUser], function (err, rows, fields) {
            if (err) {
                console.log(err);
                return res.status(300).json("Impossible de récupérer les séries (NB) de l'utilisateur");
            }
            console.log("Requete NbSerie by ID OK");
            // console.log(rows);
            callback(rows[0]);
        });
    });
}


module.exports.getNbEpisodesById = function (req, idUser, callback) {
    console.log("iduser getNbEpisodes:" + idUser);
    req.getConnection(function (err, connection) {
        connection.query('SELECT visionne.idUser, COUNT(*) AS nbVus  from  visionne WHERE  visionne.idUser = ?', [idUser], function (err, rows, fields) {
            if (err) {
                console.log(err);
                return err.status(300).json("Impossible de récupérer les episodes (NB) User");
            }
            console.log("Requete nbEpisodes by ID OK");
            console.log(rows);
            if(rows[0].idUser === null){
                rows[0].idUser = 0;
            }
            callback(rows[0]);
        });
    });
}