

//imports

const jwt = require('jsonwebtoken');
token = require('./token');
// Modules
const express = require('express');
const userRoute = express.Router();

var user = require('../models/user');
var admin= require('./auth');

// Utilisateur

//renvoie l'utilisateur courrant
userRoute.get('/current', token.verifyToken, (req, res) => {
    user.getUserByLogin(req, req.body.login, user => {
        return res.status(200).json(user);
    });
});


//renvoie l'utilisateur courrant
userRoute.get('/role', token.verifyToken, (req, res) => {
    user.getRoleByLogin(req, req.body.login, user => {
        return res.status(200).json(user);
    });
});


// Renvoie toute les activités de la base de donnees
userRoute.get('/getAllUsers', token.verifyToken, token.isAdmin, (req, res) => {
    
    user.getAllUsers(req, users => {
        return res.status(200).json(users);
    });
});


userRoute.get('/getAllUsersNb', token.verifyToken, token.isAdmin,(req, res) => {
    
    user.getAllUsersNb(req,users => {
        return res.status(200).json(users);
    });
});


userRoute.delete('/delete/:id', token.verifyToken, token.isAdmin,(req, res) => {
   
    user.deleteUser(req, req.params.id, users => {
        return res.status(200).json(users);
    });
});

// Episodes

userRoute.post('/:id/addEpisodeVisionne/:idE', token.verifyToken, (req, res) => {
    
    const login = req.body.login;
    let userToken2;
    user.getUserByLogin(req, login, userToken => {
        userToken2 = userToken;
        user.addVision(req, userToken2.idUser, user => {
            return res.status(200).json(user);
        });
    });
});


userRoute.delete('/:id/deleteEpisodeVisionne/:idE', token.verifyToken, (req, res) => {
    
    const login = req.body.login;
    let userToken2;
    user.getUserByLogin(req, login, userToken => {
        userToken2 = userToken;
        user.removeVision(req, userToken2.idUser, user => {
            return res.status(200).json(user);
        });
    });
});


userRoute.get('/serie/:idSerie/getNbEpisodesSeen/', token.verifyToken, (req, res) => {
   
    const login = req.body.login;
    let userToken2;
    user.getUserByLogin(req, login, userToken => {
        userToken2 = userToken;
        user.getNbEpisodesBySerieByUser(req, req.params.idSerie, userToken2.idUser, user => {
            return res.status(200).json(user);
        });
    });
});


// Series

userRoute.post('/:id/addSerieRegarder/:idSerie', token.verifyToken, (req, res) => {
    
    const login = req.body.login;
    let userToken2;
    user.getUserByLogin(req, login, userToken => {
        userToken2 = userToken;
        user.addRegarder(req, userToken2.idUser, user => {
            return res.status(200).json(user);
        });
    });
});


userRoute.delete('/:id/deleteSerieRegarder/:idSerie', token.verifyToken, (req, res) => {
    
    const login = req.body.login;
    let userToken2;
    user.getUserByLogin(req, login, userToken => {
        userToken2 = userToken;
        user.removeRegarder(req, userToken2.idUser, user => {
            return res.status(200).json(user);
        });
    });
});

userRoute.get('/:id/serieSeen/:idSerie', token.verifyToken, (req, res) => {
    const login = req.body.login;
    let userToken2;
    user.getUserByLogin(req, login, userToken => {
        userToken2 = userToken;
        user.isSeenSerie(req, userToken2.idUser, user => {
            return res.status(200).json(user);
        });
    });
});

//================================

userRoute.get('/:id', token.verifyToken, (req, res) => {

    const login = req.body.login;

    user.getUserByLogin(req, login, user => {
        return res.status(200).json(user);
    });
});

userRoute.get('/:id/playlist', token.verifyToken, (req, res) => {
    
    const login = req.body.login;
    let userToken2;
    user.getUserByLogin(req, login, userToken => {
        userToken2 = userToken;
        user.getPlayList(req, userToken2.idUser, user => {
            return res.status(200).json(user);
        });
    });
});

// Stats ------------------------

userRoute.get('/:id/nbSeries', token.verifyToken, (req, res) => {
    const login = req.body.login;
    let userToken2;
    user.getUserByLogin(req, login, userToken => {
        userToken2 = userToken;
        user.getNbSeriesById(req, userToken2.idUser, user => {
            return res.status(200).json(user);
        });
    });
});

userRoute.get('/:id/nbEpisodes', token.verifyToken, (req, res) => {
   
    const login = req.body.login;
    let userToken2;
    user.getUserByLogin(req, login, userToken => {
        userToken2 = userToken;
        user.getNbEpisodesById(req, userToken2.idUser, user => {
            return res.status(200).json(user);
        });
    });
});

module.exports = userRoute;
