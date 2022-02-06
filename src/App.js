import { BrowserRouter, Routes, Route } from "react-router-dom";
import swal from 'sweetalert';
import PaginaLogin from "./pages/PaginaLogin";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import NavbarUsuario from "./components/NavbarUsuarios/NavbarUsuario"
import PaginaViviendas from "./pages/PaginaViviendas";
import PaginaReserva from "./pages/PaginaReserva";
import PaginaListViviendas from "./pages/PaginaListViviendas";
import PaginaUsuarios from "./pages/paginaUsuarios"
import PaginaListUsuarios from "./pages/PaginaListUsuarios";
import { showAllviviendas, crearViviendas, crearUsuario, allUsers, allReservas, crearReserva, 
  allMantemientos, crearMantenimiento } from "./Services/services";
import NavbarReservas from "./components/NavbarUsuarios/NavbarReservas";
import NavbarViviendas from "./components/NavbarUsuarios/NavbarViviendas";
import NavbarMantemiento from "./components/NavbarUsuarios/NavbarMantemiento";
import PaginaListReservas from "./pages/PaginaListReservas";
import PaginaMantenimiento from "./pages/PaginaMantenimiento";
import PaginaListMantenimiento from "./pages/PaginaListMantenimiento";

function App() {

  const [viviendas, setViviendas] = useState([]);
  const [iniciarSesion, setIniciarSesion] = useState(false);
  const [usersDB, setUsersDB] = useState([]);
  const [iniciarUsuario, setIniciarUsuario] = useState(false);
  const [updateVivienda, setUpdateVivienda] = useState(false);
  const [updateUser, setUpdateUser] = useState(false);
  const [updateReserva, setUpdateReserva] = useState(false);
  const [updateMantenimiento, setUpdateMantenimiento] = useState(false);
  const [rolDB, setRolDB] = useState([]);
  const [reservas, setReservas] = useState([]);
  const [mantenimiento, setMantenimiento] = useState([]);

  

  useEffect(() => {  
        allUsers()
          .then((res) => {   
             setUsersDB(res.data);  
          });   
          setUpdateUser(false);
  }, [updateUser])

  

  useEffect(() => {
    showAllviviendas()
        .then((res) => {
        setViviendas(res.data);
        })
        .catch((error) => {
        console.log(error);
         });
         setUpdateVivienda(false);
        
   }, [updateVivienda]);

   useEffect(() => {
    allReservas()
      .then((res) => {
        setReservas(res.data);
      }).catch((error) => {
        console.log(error);
         });
         setUpdateReserva(false);
   }, [updateReserva]);

   
   useEffect(() => {
    allMantemientos()
      .then((res) => {
        setMantenimiento(res.data);
      }).catch((err) => {
        console.log(err);
      });
      setUpdateMantenimiento(false);
   }, [updateMantenimiento]);



   const insertarReserva = (datos) => {
    crearReserva(datos,setReservas,reservas);
    setUpdateReserva(true);
    
   }
  
   const insertVivienda = (datos) => {
      crearViviendas(datos,setViviendas,viviendas);
      setUpdateVivienda(true);
      
   }

  
   const insertarUser = (datos) => {
    crearUsuario(datos,setUsersDB, usersDB)
    setUpdateUser(true);
   }

   const insertarMantenimiento = (datos) => {
    crearMantenimiento(datos, setMantenimiento,mantenimiento);
    setUpdateMantenimiento(true);
   }


   const comprobarUsuario = (datos) => {
    if (usersDB.length === 0) {
      swal({
        text: 'no esta creado el usuario administrador',
        icon: 'error',
        timer: 3000
      })
    }
    usersDB.map((user) => {

      if ((user.usuario === datos.user) && (user.password === datos.password) && (user.roles === "administrador")) {
        setIniciarSesion(true);
      } else if ((user.usuario === datos.user) && (user.password === datos.password)) {
        setRolDB(user.roles);
        setIniciarUsuario(true);
      } else if ((user.usuario !== datos.user) && (user.password !== datos.password)) {
      
        swal({
          text: 'usuario o contraseña incorrecta',
        icon: 'error',
        timer: 1000
        })
      }

    })
      
   }
   
   

  return (
    <>
      <BrowserRouter>
      { iniciarSesion ? <Navbar  /> : iniciarUsuario ?  <NavbarUsuario rolDB={rolDB} /> : <PaginaLogin usersDB={usersDB} insertarUser={insertarUser} setIniciarSesion={setIniciarSesion} setIniciarUsuario={setIniciarUsuario} comprobarUsuario={comprobarUsuario}  /> }
      { iniciarSesion || iniciarUsuario ? 
        <Routes>  
          <Route path="/Usuario" element={ <PaginaUsuarios insertarUser={insertarUser} usersDB={usersDB}/>} />
          <Route path="/ListaUsuarios" element={ <PaginaListUsuarios usersDB={usersDB} />} />
          <Route path="/Viviendas" element={<PaginaViviendas insertVivienda={insertVivienda} />  }/>
          <Route path="/ListaViviendas" element={ <PaginaListViviendas viviendas={viviendas} />  } />
          <Route path="/Reservas" element={<PaginaReserva insertarReserva={insertarReserva}  />  } />
          <Route path="/ListaReservas" element={ <PaginaListReservas reservas={reservas} />} />
          <Route path="/Mantenimientos" element={ <PaginaMantenimiento viviendas={viviendas} insertarMantenimiento={insertarMantenimiento}/>} />
          <Route path="/ListaMantenimientos" element={ <PaginaListMantenimiento />} />

          <Route path="/listadoReservas" element={ <NavbarReservas />} />
          
          <Route path="/listadoViviendas" element={ <NavbarViviendas />} />
          <Route path="/listadoMantenimientos" element={ <NavbarMantemiento />} /> 
        </Routes> : null
      }
      </BrowserRouter>
    </>
  );
}

export default App;
