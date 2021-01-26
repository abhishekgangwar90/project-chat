
/**
 * Renders message on UI 
 * uses Mustache template engine
 * @param {*} message 
 */
export function renderMessageTemplate(message){
    // extracting the template ids
    const $messageTemplate = document.querySelector('#message-template');
    const $chat = document.querySelector('#chat');

    // creating the template
    // second parameter helps in setting the {{message}} on html
    const html = Mustache.render($messageTemplate.innerHTML,{
        message
    });

    //rendering message to UI
    $chat.insertAdjacentHTML('beforeend', html)
}