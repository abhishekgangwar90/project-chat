function getMapUrl(lat, long){
    return `https://google.com/maps?q=${lat},${long}`
}

export function fetchLocation(){
    return new Promise((resolve, reject) =>{
        if(!navigator.geolocation){
                reject('Can not load Location')
        }
        navigator.geolocation.getCurrentPosition((position) =>{
            resolve({
                lat: position.coords.latitude,
                lng: position.coords.longitude
            })
        })
    })
}
