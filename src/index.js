const {server, io} = require('./app');
const port = process.env.PORT;


io.on('connection',(socket) =>{
    console.log('New web-socket connection created')

    socket.emit('message','Welcome to the chat app')

    socket.on('onSendMessage', (message)=>{
        io.emit('message', message);
    })


})

server.listen(port, () =>{
    console.log('listening on port', port)
})