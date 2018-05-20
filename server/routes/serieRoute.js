
// Modules
const express = require('express');
const serieRoutes = express.Router();

var serie = require('../controllers/serie');

// Renvoie toutes les séries de la base de donnees
serieRoutes.get('/getAllSeries',(req, res) => {
    console.log("La route GetAll");
    serie.getAllSeries(req, series => {
        return res.status(200).json(series);
    });
});

// Renvoie la série qui correspond à l'id passé en paramètre
serieRoutes.get('/:id', (req,res) => {
    console.log("serieRouter");
    console.log("Param req: " + req.param('id'));
    serie.getSerieById(req, req.param('id'), serie => {
        console.log("serieRouter");
        return res.status(200).json(serie);
    });
});



module.exports = serieRoutes;
