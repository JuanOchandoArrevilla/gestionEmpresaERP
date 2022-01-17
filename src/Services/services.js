const axios = require('axios');

const showAllviviendas = () => {
    return axios.get("http://localhost:8000/api/v1/todasViviendas").then((res) => res.data);
}



module.exports ={showAllviviendas};