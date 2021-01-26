(function(){
    const socket = io();

    //elements from html
    const $form = document.querySelector('#form')
    const $input = document.querySelector('#input');
    const $sendMessageButton = document.querySelector('#send-button');
    const $messageTemplate = document.querySelector('#message-template');
    const $chat = document.querySelector('#chat');
    
    /**
     * Event Listeners
     */

    // sending message when button is clicked
    $sendMessageButton.addEventListener('click', sendMessage)

    // sending message when hit enter on input
    $form.addEventListener('submit',sendMessage)



    /**
     * Functions 
     */

    /**
     * emits event when send message is clicked
     * @param {*} e 
     */
    function sendMessage(e){
        e.preventDefault();

        if(!$input.value){
            return
        }
        const message = $input.value;
        socket.emit('onSendMessage', message)
    }
    

    socket.on('message',(message) =>{

        // second parameter sets the message on ui
        const html = Mustache.render($messageTemplate.innerHTML,{
            message
        });

        $chat.insertAdjacentHTML('beforeend', html)
    })
})()
