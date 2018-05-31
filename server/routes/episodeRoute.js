
// Modules
const express = require('express');
const episodeRoute = express.Router();
token = require('./token');
var ep = require('../models/episode');




episodeRoute.get('/getAllEpisodes/:id', token.verifyToken, (req, res) => {

    console.log("Param req: " + req.params.id);
    ep.getAllEpisodes(req, req.params.id, eps => {
        return res.status(200).json(eps);
    });
});


episodeRoute.post('/insert', token.verifyToken, token.isAdmin, (req, res) => {

    console.log("La route insert Serie");
    ep.insertEpisode(req, serie => {
        return res.status(200).json(serie);
    });
});


module.exports = episodeRoute;
