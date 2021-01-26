import { registerEventListeners } from './helpers/eventListeners.js'
import { renderMessageTemplate } from './templates/message.js'
import { renderGoogleMapTemplate } from './templates/googleMap.js'

(function(){
    const socket = io();

    // registers event listeners which helps in sending messages
    registerEventListeners();
    
    socket.on('message', ({type,message}) =>{
        switch(type){
            case 'message':{
                renderMessageTemplate(message)
                break;
            }

            case 'location': {
                renderGoogleMapTemplate(message)
                break;
            }

            default:
            break;
        }
    })
})()
