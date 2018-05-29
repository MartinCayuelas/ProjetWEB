// Modules
const express = require('express');
const critiqueRoute = express.Router();

var crit = require('../models/critique');
token = require('./token');
var user = require('../models/user');


critiqueRoute.get('/getAllCritiques/:id', (req, res) =>  {

    console.log("Param req: " + req.params.id);
    crit.getAllCritiques(req, req.params.id, eps => {

        return res.status(200).json(eps);
    });
});

critiqueRoute.post('/insert', token.verifyToken, (req, res) =>  {
    console.log("La route insert Commentaire");
    const login = req.body.login;
    let userToken2;
    user.getUserByLogin(req, login, userToken => {
        userToken2 = userToken;
        crit.insertCritique(req, userToken2.idUser, serie => {
            return res.status(200).json(serie);
        });
    });
});

module.exports = critiqueRoute;
