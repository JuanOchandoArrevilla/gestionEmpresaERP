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
    });
};

const crearUsuario = (datos, setUser, users) => {
  return axios
    .post("http://localhost:8000/api/v1/user", datos)
    .then((res) => {
      return setUser(users.push(res.data));
    })
}

const allUsers = () => {
    return axios
      .get('http://localhost:8000/api/v1/allUser')
      .then((res) => res.data);
}

const allReservas = () => {
  return axios
  .get('http://localhost:8000/api/v1/allReservas')
  .then((res) => res.data);
}

const listDisponible = (f_Entrada, f_Salida) => {
  return axios
    .get(`http://localhost:8000/api/v1/buscarFecha/${f_Entrada}/${f_Salida} `)
    .then((res) => res.data);
}

const deleteUser = (id) => {
  return axios.delete(`http://localhost:8000/api/v1/usuarios/${id}`).then(() => allUsers());
}


const crearReserva = (datos, set, arra) => {
  return axios
    .post("http://localhost:8000/api/v1/reservacion",datos)
    .then((res) => {
      return set(arra.push(res.data));
    })
}

const allLimpieza = () => {
  return axios
    .get('http://localhost:8000/api/v1/allLimpieza')
    .then((res) => res.data);
}

const crearLimpieza = (datos,set,arr) => {
  return axios
    .post("http://localhost:8000/api/v1/limpieza",datos)
    .then((res) => {
      return set(arr.push(res.data));
    })
}





module.exports = { showAllviviendas, crearViviendas, crearUsuario, allUsers, allReservas, listDisponible, deleteUser,crearLimpieza,allLimpieza,crearReserva };
