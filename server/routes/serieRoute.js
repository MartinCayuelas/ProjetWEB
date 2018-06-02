
// Modules
token = require('./token');
const express = require('express');
const serieRoutes = express.Router();

var serie = require('../models/serie');
var admin = require('./auth');




// vérifification si la série existe déjà
function guardSerie(req, res, next) {
    req.getConnection(function (err, connection) {
        query = "select * from Serie where titre = ?";
        connection.query(query, [req.body.titre], function (err, rows, fields) {
            if (rows.length > 0) {
                return res.status(409).json({ "submitted": false, "message": "Série existante!" });
            }
            next();
        });
    });
}


// Renvoie toute les activités de la base de donnees
serieRoutes.get('/getAllSeries', (req, res) => {
    serie.getAllSeries(req, series => {
        return res.status(200).json(series);
    });
});


serieRoutes.get('/getAllSeriesNb', token.verifyToken, token.isAdmin, (req, res) => {
    
    serie.getAllSeriesNb(req, series => {
        return res.status(200).json(series);
    });
});
serieRoutes.get('/getAllSeriesDashboard', token.verifyToken, token.isAdmin, (req, res) => {
  
    serie.getAllSeries(req, series => {
        return res.status(200).json(series);
    });
});



serieRoutes.get('/:idSerie/getNbEpisodes', token.verifyToken, (req, res) => {

    serie.getNbEpisodesBySerie(req, req.params.idSerie, series => {
        return res.status(200).json(series);
    });
});




serieRoutes.get('/:idSerie/episodesSeen', token.verifyToken, (req, res) => {
   
    serie.getEpisodesSeen(req, req.params.idSerie, series => {
        return res.status(200).json(series);
    });
});


serieRoutes.get('/:idSerie/episodesNotSeen', token.verifyToken, (req, res) => {
  
    serie.getEpisodesNotSeen(req, req.params.idSerie, series => {
        return res.status(200).json(series);
    });
});





serieRoutes.get('/getAllSeriesNews', (req, res) => {
    serie.getAllSeriesNews(req, series => {
        return res.status(200).json(series);
    });
});

serieRoutes.get('/getAllSeriesTops', (req, res) => {
    serie.getAllSeriesTop(req, series => {
        return res.status(200).json(series);
    });
});


serieRoutes.get('/:id', (req, res) => {
    serie.getSerieById(req, req.params.id, serie => {
        return res.status(200).json(serie);
    });
});


serieRoutes.post('/insert', token.verifyToken, token.isAdmin, guardSerie, (req, res) => {
    serie.insertSerie(req, serie => {
        return res.status(200).json(serie);
    });
});

serieRoutes.delete('/delete/:id', token.verifyToken, token.isAdmin, (req, res) => {
    serie.deleteSerie(req, req.params.id, serie => {
        return res.status(200).json(serie);
    });
});



serieRoutes.put('/update/:id', token.verifyToken, token.isAdmin, (req, res) => {
    serie.updateSerie(req, req.params.id, serie => {
        return res.status(200).json(serie);
    });
});



module.exports = serieRoutes;

