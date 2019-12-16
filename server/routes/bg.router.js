const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');


/**
 * GET route template
 */
router.get('/:searchQuery', (req, res) => {
    // console.log('req.params.searchQuery:', req.params.searchQuery)
    axios.get(`https://www.boardgameatlas.com/api/search?name=${req.params.searchQuery}&client_id=${process.env.bga_client_id}`).then(response => {
        // console.log('bg router get search response:', response.data)
        res.send(response.data)
    })

});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;