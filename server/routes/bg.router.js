const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/:searchQuery', (req, res) => {
    res.send('bg router get hit')
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;