const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');

router.get('/search/:searchQuery', (req, res) => {
    // console.log('searchQuery:', req.params.searchQuery)
    axios.get(`https://www.boardgameatlas.com/api/search?name=${req.params.searchQuery}&client_id=${process.env.bga_client_id}`).then(response => {
        res.send(response.data)
    }).catch(error => {
        console.log('error with searchQuery attempt', error)
        res.sendStatus(500)
    })

});

router.post('/add', (req, res) => {
    console.log('bg add post route:', req.body)
});

module.exports = router;