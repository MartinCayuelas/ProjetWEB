
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

module.exports = userRoute;
