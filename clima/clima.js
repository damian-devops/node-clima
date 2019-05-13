const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&APPID=74caf6c0dd77672a3e07dc712102c52d`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}