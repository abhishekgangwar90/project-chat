const express = require('express');
const http = require('http');
const io = require('socket.io');
const path = require('path');

const app = express();

const server = http.createServer(app);
const socket = io(server)


const staticFolder = path.resolve(__dirname,'./../public')

app.use(express.static(staticFolder))

module.exports = {
    socket, server
}