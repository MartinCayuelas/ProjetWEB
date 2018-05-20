// Modules
const express = require('express');
const router = express();

// Routes
serieRoutes = require('./serieRoute');
userRoutes = require('./userRoute');




router.use('/series', serieRoutes);
router.use('/users', userRoutes);

module.exports = router;