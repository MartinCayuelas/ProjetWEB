
// Modules
const express = require('express');
const userRoute = express.Router();

var user = require('../controllers/user');

// Renvoie toute les activités de la base de donnees
userRoute.get('/getAllUsers',(req, res) => {
    console.log("La route GetAll Users");
    user.getAllUsers(req, users => {
        return res.status(200).json(users);
    });
});

// Insère un Utilisateur
userRoute.post('/signUp',(req, res) => {
    console.log("La route signUp Users");
    user.signUp(req, user => {
        return res.status(200).json(user);
    });
});


userRoute.get('/:id', (req,res) => {
    console.log("userRoues");
    console.log("Param req: " + req.params.id);
    user.getUserById(req, req.params.id, user => {
        console.log("userRoutes");
        return res.status(200).json(user);
    });
});

userRoute.get('/:id/nbSeries', (req,res) => {
    console.log("userRouesStats");
    console.log("Param req: " + req.params.id);
    user.getNbSeriesById(req, req.params.id, user => {
        console.log("userRoutesStats");
        return res.status(200).json(user);
    });
});

module.exports = userRoute;
