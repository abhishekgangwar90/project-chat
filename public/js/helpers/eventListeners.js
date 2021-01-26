import { sendMessage } from './../utils/socket.js';
import { fetchLocation } from './../utils/location.js'


function handleMessageBotEvents(message){
    switch(message){
        case '@location':{
            fetchLocation()
            .then((res) =>{
                sendMessage({
                    type: 'location',
                    message: res
                })
            }).catch((err) =>{
                console.log('unable to fetch location')
            })
            break;
        }


        default:
        return null;
    }
}

export function registerEventListeners(){
    const $form = document.querySelector('#form')
    const $input = document.querySelector('#input');
    const $sendMessageButton = document.querySelector('#send-button');

    const botEvents = ['@location']

    function sendMessageToServer(e){
        e.preventDefault()
        const message = $input.value;
        if(!message){
            return
        }
        $input.value = ''
        if(botEvents.indexOf(message) !== -1){
            return handleMessageBotEvents(message)
        }
        sendMessage({
            type: 'message',
            message
        })
            
    }


    // sending message when button is clicked
    $sendMessageButton.addEventListener('click', sendMessageToServer)

    // sending message when hit enter on input
    $form.addEventListener('submit',sendMessageToServer)
}