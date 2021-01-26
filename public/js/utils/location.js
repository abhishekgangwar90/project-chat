function location(){
    return new Promise((resolve, reject) =>{
        if(!navigator.geolocation){
                reject('Can not load Location')
        }
        navigator.geolocation.getCurrentPosition((position) =>{
            console.log(position.coords.longitude)
            resolve({
                lat: position.coords.latitude,
                lang: position.coords.longitude
            })
        })
    })
}

export default location;