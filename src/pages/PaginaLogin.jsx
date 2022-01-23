import React,{useState} from "react";
import "./css/PageLogin.css";
import swal from 'sweetalert';
import Login from "../components/Login";
import Registro from "../components/Registro";

const PaginaLogin = ({usersDB = [], insertarUser, setIniciarSesion}) => {


  const [show,setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [userAmin, setUserAmin] = useState(false);
  const [errorMensaje, setErrorMensaje] = useState("");


  
  const registroModal = () => {
    if (usersDB.length >= 1) {
      setUserAmin(true);
      // alert("El programa ya tiene un usuario administrador")
      swal({
        text: "El programa ya tiene un usuario administrador", 
        icon: "error",
        timer: 2000
      })
    } else {
      handleShow();
    }  
  }

  const comprobarUsuario = (datos) => {

    console.log(usersDB[0].password , datos.password);
    console.log(usersDB[0].usuario , datos.user);
      if ((usersDB[0].usuario === datos.user) && (usersDB[0].password === datos.password)) {
        setIniciarSesion(true);
      } else {
        setErrorMensaje("usuario o contraseña son incorrectas");
      }

   }

  return (
    <>
      <Login registroModal={registroModal} userAmin={userAmin} comprobarUsuario={comprobarUsuario} errorMensaje={errorMensaje} />
      <Registro show={show} onHide={handleClose} insertarUser={insertarUser}/>
    </>
  );
};

export default PaginaLogin;
