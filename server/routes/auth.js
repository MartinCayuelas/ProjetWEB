const express = require('express');
const router = express.Router();

var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var bcryptLogin = require('bcryptjs');
// vérifification si le login déjà utilisé
function guardLogin(req, res, next) {
    req.getConnection(function (err, connection) {
        query = "select * from Utilisateur where login = ?";
        connection.query(query, [req.body.login], function (err, rows, fields) {
            if (rows.length > 0) {
                return res.status(409).json({ "submitted": false, "message": "This login is already used!" });
            }
            next();
        });
    });
}
// vérifification si l'email est déjà utilisé
function guardEmail(req, res, next) {
    req.getConnection(function (err, connection) {
        query = "select * from Utilisateur where email = ?";
        connection.query(query, [req.body.email], function (err, rows, fields) {
            if (rows.length > 0) {
                return res.status(409).json({ "submitted": false, "message": "This email is already used!" });
            }
            next();
        });
    });
}



// Insère un Utilisateur
router.post('/signUp', guardLogin, guardEmail, (req, res) => {
   
    let queryInsert = "INSERT INTO Utilisateur VALUES (NULL, ?, ?, ?, ?, ?, ?, ?, 0)";
    const user = [

        req.body.login,
        req.body.prenom,
        req.body.nom,
        bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(9)), // On hash le password
        req.body.email,
        '2017-05-27',
        req.body.avatar
    ]
    
    req.getConnection(function (err, connection) {
        connection.query(queryInsert, user, function (err, rows, fields) {
            if (err) {
                console.log(err);
                return err.status(500).json('erreur inscription');
            }
            return res.status(200).json({ "submitted": true, "message": "You are registered !" });
        });

    });
});



router.post('/signIn', (req, res) => {
    req.getConnection(function (err, connexion) {
        let query = 'select * from Utilisateur where login = ?';
        connexion.query(query, [req.body.login], function (err, rows, fields) {
            if (err) {
                return err.sendStatus(401);
            }
          
            let user = rows[0]; //Récupération de l'utilisateur
            if (user && bcrypt.compareSync(req.body.password, user.password)) { // comparaison des passwords

              
                let payload = { // Ce que va contenir le corps du token
                    "sub":  user.login,
                }
                let token = jwt.sign(payload, process.env.secretKey, {expiresIn: '1h' }); // Construction du token
                return res.status(200).send({ token });
            } else {
                res.status(401).send('Invalid Login or Password');
            }
        });
    });
});




module.exports = router;
