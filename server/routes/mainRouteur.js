
// Routeur gère toutes les routes

// Modules
const express = require('express');
const router = express();

// Routes
serieRoutes = require('./serieRoute');
userRoutes = require('./userRoute');
episodeRoutes = require('./episodeRoute');
critiqueRoutes = require('./critiqueRoute');
auth = require('./auth');



router.use('/series', serieRoutes);
router.use('/users', userRoutes);

router.use('/episodes', episodeRoutes);
router.use('/critiques', critiqueRoutes);
router.use('/auth', auth);



module.exports = router;