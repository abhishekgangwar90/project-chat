export function renderGoogleMapTemplate({lat, lng}){

    const $mapTemplate = document.querySelector('#map-template');
    const $chat = document.querySelector('#chat');

    const html = Mustache.render($mapTemplate.innerHTML,{
        lat,
        lng
    });

    $chat.insertAdjacentHTML('beforeend', html)

}