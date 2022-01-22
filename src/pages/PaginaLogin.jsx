import React,{useState} from "react";
import "./css/PageLogin.css";
import Login from "../components/Login";
import Registro from "../components/Registro";

const PaginaLogin = () => {


  const [show,setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  
  const registroModal = () => {
    handleShow();
  }

  return (
    <>
      <Login registroModal={registroModal}/>
      <Registro show={show} onHide={handleClose} />
    </>
  );
};

export default PaginaLogin;
