const {server, io} = require('./app');
const port = process.env.PORT;


io.on('connection',(socket) =>{
    console.log('New web-socket connection created')

    socket.emit('message',{
        type: 'message',
        message: 'Welcome to Chat App!!'
    })

    socket.on('onSendMessage', (message)=>{
        io.emit('message', message);
    })


})

server.listen(port, () =>{
    console.log('listening on port', port)
})