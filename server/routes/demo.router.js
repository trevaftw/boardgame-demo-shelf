const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');


/**
 * GET route template
 */
router.get('/search/:players/:skill', (req, res) => {
    pool.query(`
    SELECT * FROM "shelf"
    WHERE min_players >= $1 AND skill_level = $2;`,
        [req.params.players, req.params.skill]
    ).then((response) => {
        if (!response.rows[0]) {
            console.log('no results')
            res.send('no results')
            //add a send here to update dom
        } else {
            res.send(response.rows)
        }
    }
    )
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;