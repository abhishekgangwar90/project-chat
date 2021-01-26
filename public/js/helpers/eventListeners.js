import { sendMessage } from './../utils/socket.js';


function handleInputEvents(){

}

export function registerEventListeners(){
    const $form = document.querySelector('#form')
    const $input = document.querySelector('#input');
    const $sendMessageButton = document.querySelector('#send-button');


    function sendMessageToServer(e){
        e.preventDefault()
        const message = $input.value;
        if(!message){
            return
        }
        sendMessage(message);
        $input.value = ''    
    }


    // sending message when button is clicked
    $sendMessageButton.addEventListener('click', sendMessageToServer)

    // sending message when hit enter on input
    $form.addEventListener('submit',sendMessageToServer)
}