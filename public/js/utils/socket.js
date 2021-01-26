const socket = io();

/**
 * Emits an event which is used to send message from client to server
 * @param {*} message 
 */
export function sendMessage(message){
    socket.emit('onSendMessage',message)
}
