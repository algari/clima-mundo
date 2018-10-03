const axios = require('axios');

const getClima = async (lat, lng) =>{
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=4752589e24d8cef7b5c62ac669dd0594`);
    if (resp.data.cod !== 200) {
        throw new Error('Error al consular el clima')
    }
    return resp.data.main.temp;
}

module.exports = {
    getClima
}