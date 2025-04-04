const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 5000;
const hostName = 'localhost';
const hero_page = require('./routes/hero');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', hero_page);

app.listen(port, hostName, () => {
    console.log(`The server is running at http://${hostName}:${port}`)
})
