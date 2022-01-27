import { BrowserRouter, Routes, Route } from "react-router-dom";

import PaginaLogin from "./pages/PaginaLogin";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import NavbarUsuario from "./components/NavbarUsuarios/NavbarUsuario"
import PaginaViviendas from "./pages/PaginaViviendas";
import PaginaReserva from "./pages/PaginaReserva";
import PaginaListViviendas from "./pages/PaginaListViviendas";
import PaginaUsuarios from "./pages/paginaUsuarios"
import PaginaListUsuarios from "./pages/PaginaListUsuarios";
import { showAllviviendas, crearViviendas, crearUsuario, allUsers, allReservas } from "./Services/services";
import NavbarReservas from "./components/NavbarUsuarios/NavbarReservas";
import NavbarViviendas from "./components/NavbarUsuarios/NavbarViviendas";
import PaginaListReservas from "./pages/PaginaListReservas";

function App() {

  const [viviendas, setViviendas] = useState([]);
  const [iniciarSesion, setIniciarSesion] = useState(false);
  const [usersDB, setUsersDB] = useState([]);
  const [iniciarUsuario, setIniciarUsuario] = useState(false);
  const [errorMensaje, setErrorMensaje] = useState("");
  const [rolDB, setRolDB] = useState([]);
  const [reservas, setReservas] = useState([]);
  

  

  useEffect(() => {  
        allUsers()
          .then((res) => {   
             setUsersDB(res.data);  
          });   
        
  }, [usersDB])

  

  useEffect(() => {
    showAllviviendas()
        .then((res) => {
        setViviendas(res.data);
        })
        .catch((error) => {
        console.log(error);
         });
   }, [viviendas]);

   useEffect(() => {
    allReservas()
      .then((res) => {
        setReservas(res.data);
      }).catch((error) => {
        console.log(error);
         });
   }, [reservas]);

  
  
   const insertVivienda = (datos) => {
      crearViviendas(datos,setViviendas,viviendas);
   }

  
   const insertarUser = (datos) => {
    crearUsuario(datos,setUsersDB, usersDB)
   }


   const comprobarUsuario = (datos) => {

    usersDB.map((user) => {

      if ((user.usuario === datos.user) && (user.password === datos.password) && (user.roles === "administrador")) {
        setIniciarSesion(true);
      } else if ((user.usuario === datos.user) && (user.password === datos.password)) {
        setRolDB(user.roles);
        setIniciarUsuario(true);
      } else {
        setErrorMensaje("usuario o contraseña son incorrectas");
      }

    })
      
   }
   
   
   

  return (
    <>
      <BrowserRouter>
      { iniciarSesion ? <Navbar  /> : iniciarUsuario ?  <NavbarUsuario rolDB={rolDB} /> : <PaginaLogin usersDB={usersDB} insertarUser={insertarUser} setIniciarSesion={setIniciarSesion} setIniciarUsuario={setIniciarUsuario} comprobarUsuario={comprobarUsuario} errorMensaje={errorMensaje} /> }
      { iniciarSesion || iniciarUsuario ? 
        <Routes>  
          <Route path="/Viviendas" element={<PaginaViviendas insertVivienda={insertVivienda} />  }/>
          <Route path="/ListaViviendas" element={ <PaginaListViviendas viviendas={viviendas} />  } />
          <Route path="/Reservas" element={<PaginaReserva  />  } />
          <Route path="/ListaReservas" element={ <PaginaListReservas reservas={reservas} />} />
          <Route path="/Usuario" element={ <PaginaUsuarios insertarUser={insertarUser} usersDB={usersDB}/>} />
          <Route path="/ListaUsuarios" element={ <PaginaListUsuarios usersDB={usersDB} />} />
          <Route path="/listadoReservas" element={ <NavbarReservas />} />
          
          <Route path="/listadoViviendas" element={ <NavbarViviendas />} />
          
        </Routes> : null
      }
      </BrowserRouter>
    </>
  );
}

export default App;
