// Modules
const express = require('express');
const critiqueRoute = express.Router();

var crit = require('../models/critique');
token = require('./token');
var user = require('../models/user');


critiqueRoute.get('/getAllCritiques/:id', (req, res) =>  {

    crit.getAllCritiques(req, req.params.id, eps => {

        return res.status(200).json(eps);
    });
});

critiqueRoute.post('/insert', token.verifyToken, (req, res) =>  {
    const login = req.body.login;
    let userToken2;
    user.getUserByLogin(req, login, userToken => {
        userToken2 = userToken;
        crit.insertCritique(req, userToken2.idUser, serie => {
            return res.status(200).json(serie);
        });
    });
});


critiqueRoute.delete('/delete/:id', token.verifyToken, token.isAdmin, (req, res) => {
    crit.deleteCritique(req, req.params.id, serie => {
        return res.status(200).json(serie);
    });
});

module.exports = critiqueRoute;
