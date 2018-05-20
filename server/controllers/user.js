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
