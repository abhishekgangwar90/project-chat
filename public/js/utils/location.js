export function fetchLocation(){
    return new Promise((resolve, reject) =>{
        if(!navigator.geolocation){
                reject('Can not load Location')
        }
        navigator.geolocation.getCurrentPosition((position) =>{
            resolve({
                lat: position.coords.latitude,
                lang: position.coords.longitude
            })
        })
    })
}
