
// Modules
const express = require('express');
const serieRoutes = express.Router();

var serie = require('../controllers/serie');

// Renvoie toute les activités de la base de donnees
serieRoutes.get('/getAllSeries',(req, res) => {
    console.log("La route GetAll");
    serie.getAllSeries(req, series => {
        return res.status(200).json(series);
    });
});

serieRoutes.get('/:id', (req,res) => {
    console.log("serieRouter");
    console.log("Param req: " + req.param('id'));
    serie.getSerieById(req, req.param('id'), serie => {
        console.log("serieRouter");
        return res.status(200).json(serie);
    });
});
/*
tagRoutes.put   ('/:id', auth, tag.update_tag);
tagRoutes.delete('/:id', auth, tag.delete_tag);
*/


module.exports = serieRoutes;
