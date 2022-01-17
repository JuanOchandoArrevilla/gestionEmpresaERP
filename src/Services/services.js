const axios = require("axios");

const showAllviviendas = () => {
  return axios
    .get("http://localhost:8000/api/v1/todasViviendas")
    .then((res) => res.data);
};

const crearViviendas = (datos, setVivienda, vivienda) => {
  return axios
    .post("http://localhost:8000/api/v1/vivienda/", datos)
    .then((res) => {
    return setVivienda(vivienda.push(res.data));
    })
    .catch((error) => {
        console.log(error.response)
    //   console.log(error);
    });
};

module.exports = { showAllviviendas, crearViviendas };
