import React,{useState} from "react";
import "./css/PageLogin.css";
import Login from "../components/Login";
import Registro from "../components/Registro";

const PaginaLogin = ({usersDB = [], insertarUser, comprobarUsuario}) => {


  const [show,setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [userAmin, setUserAmin] = useState(false);
  
  const registroModal = () => {
    if (usersDB.length >= 1) {
      setUserAmin(true);
      alert("El programa ya tiene un usuario administrador")
    } else {
      handleShow();
    }  
  }

  return (
    <>
      <Login registroModal={registroModal} userAmin={userAmin} comprobarUsuario={comprobarUsuario} />
      <Registro show={show} onHide={handleClose} insertarUser={insertarUser}/>
    </>
  );
};

export default PaginaLogin;
