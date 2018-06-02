
// Modules
const express = require('express');
const episodeRoute = express.Router();
token = require('./token');
var ep = require('../models/episode');




episodeRoute.get('/getAllEpisodes/:id', token.verifyToken, (req, res) => {

    ep.getAllEpisodes(req, req.params.id, eps => {
        return res.status(200).json(eps);
    });
});


episodeRoute.post('/insert', token.verifyToken, token.isAdmin, (req, res) => {

    ep.insertEpisode(req, serie => {
        return res.status(200).json(serie);
    });
});


episodeRoute.delete('/delete/:id', token.verifyToken, token.isAdmin, (req, res) => {

    ep.deleteEpisode(req, req.params.id, ep => {
        return res.status(200).json(ep);
    });
});



module.exports = episodeRoute;
