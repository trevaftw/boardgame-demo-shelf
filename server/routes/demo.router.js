const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/search/:players/:skill', (req, res) => {
    console.log('players:', req.params.players)
    console.log('skill:', req.params.skill)
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;