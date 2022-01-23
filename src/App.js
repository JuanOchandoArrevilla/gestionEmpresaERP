import { BrowserRouter, Routes, Route } from "react-router-dom";

import PaginaLogin from "./pages/PaginaLogin";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import PaginaViviendas from "./pages/PaginaViviendas";
import PaginaReserva from "./pages/PaginaReserva";
import PaginaListViviendas from "./pages/PaginaListViviendas";
import { showAllviviendas, crearViviendas, crearUsuario, allUsers } from "./Services/services";


function App() {

  const [viviendas, setViviendas] = useState([]);
  const [iniciarSesion, setIniciarSesion] = useState(false);
  const [usersDB, setUsersDB] = useState([]);
 

  useEffect(() => {
    allUsers()
      .then((res) => {
        setUsersDB(res.data);
      })
      .catch((error) => {
        console.log(error);
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

   const insertVivienda = (datos) => {
      crearViviendas(datos,setViviendas,viviendas);
   }

   const insertarUser = (datos) => {
    crearUsuario(datos,setUsersDB, usersDB)
   }
   
   const comprobarUsuario = (datos) => {

    console.log(usersDB[0].password , datos.password);
    console.log(usersDB[0].usuario , datos.user);
      if ((usersDB[0].usuario === datos.user) && (usersDB[0].password === datos.password)) {
        setIniciarSesion(true);
      }

   }

  return (
    <>
      <BrowserRouter>
      { iniciarSesion ? <Navbar /> : <PaginaLogin usersDB={usersDB} insertarUser={insertarUser}  comprobarUsuario={comprobarUsuario}/> }
      
      { iniciarSesion ? 
        <Routes>  
          <Route path="/viviendas" element={  <PaginaViviendas insertVivienda={insertVivienda} />  }/>
          <Route path="/reserva" element={ <PaginaReserva />  } />
          <Route path="/listaViviendas" element={ <PaginaListViviendas viviendas={viviendas} />  } />
        </Routes> : null
      }
      </BrowserRouter>
    </>
  );
}

export default App;
