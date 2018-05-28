
const jwt = require('jsonwebtoken');
const router = require('express').Router();
module.exports = {


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

            payload = jwt.verify(token, 'secretKey');
            if (!payload) { // On verifie la validité du payload avec notre secretKey
                return res.status(401).send('Unauthorized request');
            }

            console.log('Payload : ' + payload.sub + '---------------------------------------');
            req.body.login = payload.sub;
            next();
        } catch (e) {
            if (e instanceof jwt.JsonWebTokenError) {
                return res.status(401).send('Invalid Token');
            }
        }

    }
} 
