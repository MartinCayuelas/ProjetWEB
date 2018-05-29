
// Modules
token = require('./token');
const express = require('express');
const serieRoutes = express.Router();

var serie = require('../models/serie');

// Renvoie toute les activités de la base de donnees
serieRoutes.get('/getAllSeries', (req, res) => {
    console.log("La route GetAll");
    serie.getAllSeries(req, series => {
        return res.status(200).json(series);
    });
});

serieRoutes.get('/getAllSeriesDashboard', token.verifyToken, (req, res) => {
    console.log("La route GetAll verify SerieGET ALL");
    serie.getAllSeries(req, series => {
        return res.status(200).json(series);
    });
});


serieRoutes.get('/getAllSeriesNb', token.verifyToken, (req, res) => {
    console.log(" GetAllNb");
    serie.getAllSeriesNb(req, series => {
        return res.status(200).json(series);
    });
});


serieRoutes.get('/:idSerie/getNbEpisodes/', token.verifyToken, (req, res) => {
    console.log("GET nb Episodes for Série");
    serie.getNbEpisodesBySerie(req, req.params.idSerie,series => {
        return res.status(200).json(series);
    });
});


serieRoutes.get('/getAllSeriesNews', (req, res) => {
    console.log("La route GetAllNews");
    serie.getAllSeriesNews(req, series => {
        return res.status(200).json(series);
    });
});

serieRoutes.get('/getAllSeriesTops', (req, res) => {
    console.log("La route GetAllTop");
    serie.getAllSeriesTop(req, series => {
        return res.status(200).json(series);
    });
});


serieRoutes.get('/:id', (req, res) => {
    console.log("serieRouter");
    console.log("Param req: " + req.params.id);
    serie.getSerieById(req, req.params.id, serie => {
        console.log("serieRouter");
        return res.status(200).json(serie);
    });
});


serieRoutes.post('/insert', token.verifyToken, (req, res) => {
    console.log("La route insert Serie");
    serie.insertSerie(req, serie => {
        return res.status(200).json(serie);
    });
});

serieRoutes.delete('/delete/:id', token.verifyToken, (req, res) => {
    console.log("La route delete Serie");
    serie.deleteSerie(req, req.params.id, serie => {
        return res.status(200).json(serie);
    });
});

serieRoutes.put('/update/:id', token.verifyToken, (req, res) => {
    console.log("La route update Serie");
    serie.updateSerie(req, req.params.id, serie => {
        return res.status(200).json(serie);
    });
});



module.exports = serieRoutes;
