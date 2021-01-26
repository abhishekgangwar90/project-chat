const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const path = require('path');

const app = express();

// creating serve to pass to socket io
const server = http.createServer(app);
const io = socketIO(server)

const staticFolder = path.resolve(__dirname,'./../public')

app.use(express.static(staticFolder))

module.exports = {
    io, server
}