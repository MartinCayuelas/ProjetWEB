// Modules
const express = require('express');
const critiqueRoute = express.Router();

var crit = require('../models/critique');
token = require('./token');



critiqueRoute.get('/getAllCritiques/:id', (req,res) => {
 
    console.log("Param req: " + req.params.id);
    crit.getAllCritiques(req, req.params.id, eps => {
        
        return res.status(200).json(eps);
    });
});

critiqueRoute.post('/insert', token.verifyToken , (req,res) => {
    console.log("La route insert Commentaire");
    crit.insertCritique(req, serie => {
        return res.status(200).json(serie);
    });
});

module.exports = critiqueRoute;
