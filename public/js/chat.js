import { registerEventListeners } from './helpers/eventListeners.js'
import {renderMessageTemplate} from './helpers/templateRenders.js'

(function(){
    const socket = io();

    // registers event listeners which helps in sending messages
    registerEventListeners();
    
    socket.on('message', (message) =>{
        renderMessageTemplate(message)
    })
})()
