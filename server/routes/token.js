
const jwt = require('jsonwebtoken');
const router = require('express').Router();
module.exports = {

// Verification du token reçu par la requete HTTP

    verifyToken: function (req, res, next) {
        if (!req.headers.authorization) {
            return res.status(401).send('Unauthorized request');
        }

        let token = req.headers.authorization.split(' ')[1]; // on récupère le token 
        // On enleve le 'Bearer'
        if (token === 'null') { // Si le token est vide 
            return res.status(401).send('Unauthorized request');
        }
        let payload;

        try {

            payload = jwt.verify(token, process.env.secretKey);
            if (!payload) { // On verifie la validité du payload avec notre secretKey
                return res.status(401).send('Unauthorized request');
            }

            req.body.login = payload.sub; // On affecte la valeur pour pouvoir la réutiliser dans la fonction appelée par
                                            // next();
            next(); // Passe à la fonction suivante
        } catch (e) {
            if (e instanceof jwt.JsonWebTokenError) {
                return res.status(401).send('Invalid Token');
            }
        }

    },

    // Fonctiond de controle utilisé dans les fonctions nécessitant un accès admin

    isAdmin: function (req, res, next) {
        req.getConnection(function (err, connection) {
            query = "select role from Utilisateur where login = ?";
            connection.query(query, [req.body.login], function (err, rows, fields) {
               
                if (rows[0].role === 0) {
                    return res.sendStatus(401);
                }
                next();
            });
        });

    }




} 
