import React, { useState, useEffect } from "react";
import { listaDataGastos } from "../Services/services";
import ListaGastos from "../components/ListaGastos";

const PaginaListGastos = () => {
  const [dataGastos, setDataGastos] = useState([]);

  useEffect(() => {
    listaDataGastos().then((res) => {
      setDataGastos(res.data);
    });
  }, []);
  
  return (
    <>
      <ListaGastos dataGastos={dataGastos} />
    </>
  );
};

export default PaginaListGastos;
