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

const allMantemientos = () => {
  return axios
    .get('http://localhost:8000/api/v1/allMantenimientos')
    .then((res) => res.data);
}

const crearMantenimiento = (datos,set,arr) => {
  return axios
    .post("http://localhost:8000/api/v1/matenimiento",datos)
    .then((res) => {
      return set(arr.push(res.data));
    })
}

const listaDataMantenimiento = () => {
  return axios
    .get("http://localhost:8000/api/v1/listaDataMantenimiento")
    .then((res) => res.data);
}



module.exports = { listaDataMantenimiento ,showAllviviendas, crearViviendas, crearUsuario, allUsers, allReservas, listDisponible, deleteUser,crearMantenimiento,allMantemientos,crearReserva };
