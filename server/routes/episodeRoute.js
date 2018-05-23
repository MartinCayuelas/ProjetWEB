
// Modules
const express = require('express');
const episodeRoute = express.Router();

var ep = require('../models/episode');




episodeRoute.get('/getAllEpisodes/:id', (req,res) => {
 
    console.log("Param req: " + req.params.id);
    ep.getAllEpisodes(req, req.params.id, eps => {
        
        return res.status(200).json(eps);
    });
});



module.exports = episodeRoute;
