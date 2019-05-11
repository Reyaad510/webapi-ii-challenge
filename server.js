const express = require('express');

const TestsRouter = require('./tests/tests-router.js');

const server = express();

server.use(express.json());

server.use('/api/posts', TestsRouter);

server.get('/', (req, res) => {
    res.send(`
    <h2> Captain Server on duty! :) </h2>
    `)
})

module.exports = server;