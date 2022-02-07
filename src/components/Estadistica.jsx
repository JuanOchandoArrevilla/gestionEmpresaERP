import React, {useState} from "react";

const Estadistica = ({ gastos = [], mantenimiento = [] }) => {

    const [total, setTotal] = useState("");

  const calcularAño = () => {
    let cantidad = 0;
    let manten = 0;
    gastos.map((g) => {
        cantidad += g.Pago;
    })  

    mantenimiento.map((m) => {
        manten += m.Pago;
    })

    setTotal(cantidad + manten);
  };


  return (
    <>
      <div>
        <button onClick={() => calcularAño()} > calcular año</button>
        <h1>{total}</h1>
      </div>
    </>
  );
};

export default Estadistica;
