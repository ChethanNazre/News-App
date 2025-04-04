const express = require('express');
const hero_route = express.Router();
const axios = require('axios');
require('dotenv').config();
const api_key = process.env.api_key


hero_route.get('/', async (req, res) => {
    const hero_data = await axios.get(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=1363135e732b445ca5e16dded3d8b966`);
    res.send(hero_data.data)
    console.log(hero_data.data)
})



module.exports = hero_route;