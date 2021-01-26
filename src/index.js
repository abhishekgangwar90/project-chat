const {server, socket} = require('./app');
const port = process.env.PORT;


socket.on('connection',() =>{
    console.log('client Connected')
})

server.listen(port, () =>{
    console.log('listening on port', port)
})