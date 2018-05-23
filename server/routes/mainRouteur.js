// Modules
const express = require('express');
const router = express();

// Routes
serieRoutes = require('./serieRoute');
userRoutes = require('./userRoute');
episodeRoutes = require('./episodeRoute');


router.use('/series', serieRoutes);
router.use('/users', userRoutes);

router.use('/episodes', episodeRoutes);

module.exports = router;