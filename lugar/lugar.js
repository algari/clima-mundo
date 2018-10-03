const axios = require('axios');

const getLugarLatLng = async (direccion) =>{

    let encodedUrl = encodeURI(direccion);
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyDzbQ_553v-n8QNs2aafN9QaZbByTyM7gQ`);
    if (resp.data.stauts === 'ZERO_RESULTS') {
        throw new Error ('No hay resultados para '+ direccion)
    } 
    let location = resp.data.results[0];
    let coords = location.geometry.location;
    console.log('Direccion:', location.formatted_address);
    console.log('lat:', coords.lat);
    console.log('lng:', coords.lng);
    
    return {
        direccion: location.formatted_address,
        lat: coords.lat,
        lng: coords.lng
    }
};

module.exports = {
    getLugarLatLng
}
