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
    // console.log('bg add post route:', req.body)
    pool.query(`
    INSERT INTO "shelf" (
        "bg_id",
        "name", 
        "min_players",
        "max_players",
        "min_playtime",
        "max_playtime",
        "description_preview", 
        "image_url",
        "official_url",
        "rules_url",
        "skill_level"
    )
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11);`,
        [
            req.body.id,
            req.body.name,
            req.body.min_players,
            req.body.max_players,
            req.body.min_playtime,
            req.body.max_playtime,
            req.body.description_preview,
            req.body.image_url,
            req.body.official_url,
            req.body.rules_url,
            req.body.skill_level
        ]
    ).then(() => {
        res.sendStatus(200)
    }).catch(error => {
        console.log('error with add to demo shelf router post:', error)
        res.sendStatus(500)
    })
});

module.exports = router;