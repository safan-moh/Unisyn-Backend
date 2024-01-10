const cors = require('cors');
const express = require('express');

function createServer() {
    const app = express();
    app.use(cors());
    app.use(express.json());
    return app;
}

module.exports =  createServer;
