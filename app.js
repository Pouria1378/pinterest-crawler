const path = require('path');
const express = require('express');
const cors = require('cors')
const app = express();
const bodyParser = require('body-parser');
const mongoConnect = require('./utils/database').mongoConnect;
require('dotenv').config()

const responseMessage = require("./functions/responseMessage")

const pinterestCrawlRoutes = require('./routes/pinterestCrawl');

app.use(cors())
app.use(express.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'public')));

app.use(pinterestCrawlRoutes);

app.use((req, res, next) => {
    res
        .status(404)
        .json(responseMessage(404));
})


mongoConnect((client) => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server running on port ${process.env.PORT || 8000}`);
    });
})