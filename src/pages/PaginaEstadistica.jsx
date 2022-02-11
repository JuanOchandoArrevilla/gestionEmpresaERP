import React, { useState } from "react";
import "./css/PageEstadistica.css";
import {
  calcularIngresoAno,
  calcularAñoGastos,
  calcularAñoLimpieza,
  calcularMensual,
  calcularMesLimpieza
} from "../Services/services";
import { Formik, Form, Field } from "formik";
const PaginaEstadistica = () => {
  const [fechas, setFechas] = useState({
    Fecha: "",
  });

  const [añoGastos, setAñoGastos] = useState([]);
  const [añoLimpieza, setAñoLimpieza] = useState([]);
  const [ingresoAno, setIngresoAno] = useState([]);
  const [sumaGastos, setSumaGastos] = useState("");
  const [sumaIngresos, setSumaIngresos] = useState("");
  const [mesGastos, setMesGastos] = useState("");
  const [mesLimpieza, setMesLimpieza] = useState("");
  const [sumaGastosMensual, setSumaGastosMensual] = useState("");

  const gastosAño = async (fecha) => {
    const gasto = await calcularAñoGastos(fecha);
    setAñoGastos(gasto);
  };

  const gastoLimpieza = async (fecha) => {
    const gasto = await calcularAñoLimpieza(fecha);
    setAñoLimpieza(gasto);
  };

  const anoIngreso = async (fecha) => {
    const ingreso = await calcularIngresoAno(fecha);
    setIngresoAno(ingreso);
  };

  const gastoMes = async (fecha) => {
    const gasto = await calcularMensual(fecha);
    setMesGastos(gasto);
  }

  const gastosMesLimpieza = async (fecha) => {
    const gasto = await calcularMesLimpieza(fecha);
    setMesLimpieza(gasto);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFechas((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const calcularDatos = () => {
    let gastos = 0;
    let ingresos = 0;
    // eslint-disable-next-line array-callback-return
    añoGastos.map((s) => {
      gastos += s.pago;
    });
    // eslint-disable-next-line array-callback-return
    añoLimpieza.map((s) => {
      gastos += s.pago;
    });
    // eslint-disable-next-line array-callback-return
    ingresoAno.map((s) => {
      ingresos += s.total;
    });

    setSumaGastos(gastos);
    setSumaIngresos(ingresos);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    gastosAño(fechas.Fecha);
    gastoLimpieza(fechas.Fecha);
    anoIngreso(fechas.Fecha);
  };

  const calcularDatosMensual = () => {
    let gastos = 0;
    // eslint-disable-next-line array-callback-return
    mesGastos.map((s) => {
      gastos += s.pago
     
    })
// eslint-disable-next-line array-callback-return
    mesLimpieza.map((s) => {
      gastos += s.pago
    })
  
    setSumaGastosMensual(gastos);
    
  }

  return (
    <>
      <form className="formAño" onSubmit={handleSubmit}>
        <h1>informe de Gastos e Ingresos en el año:</h1>
        <br />
        <label>fecha entrada:</label>
        <input
          type="date"
          name="Fecha"
          value={fechas.Fecha}
          onChange={handleChange}
        />
        <button
          onClick={() => calcularDatos()}
          type="submit"
          className="btn btn-success m-2"
        >
          buscar año
        </button>
      </form>
      <h4 className="formAño">{sumaGastos}</h4>
      <h4 className="formAño">el ingreso es {sumaIngresos}</h4>

      <h1>informe de Gastos e Ingresos mensual:</h1>
      <Formik
        initialValues={{
          mes: "",
        }}
        onSubmit={(valores, { resetForm }) => {
          resetForm();
           gastoMes(valores.mes);
           gastosMesLimpieza(valores.mes);
        }}
      >
        <Form>
          <div className="mb-3">
            <label className="">
              mes:
            </label>
            <Field type="number" name="mes" as="select">
             <option value="0"> " "</option>
              <option value="01"> Enero</option>
              <option value="02"> Febrero</option>
              <option value="03"> Marzo</option>
              <option value="04"> Abril</option>
              <option value="05"> Mayo</option>
              <option value="06"> Junio</option>
              <option value="07"> Julio</option>
              <option value="08"> Agosto</option>
              <option value="09"> Septiembre</option>
              <option value="10"> Octubre</option>
              <option value="11"> Noviembre</option>
              <option value="12"> Diciembre</option>
            </Field>
            <button onClick={() => calcularDatosMensual()} type="submit">buscar mes</button>
          </div>
        </Form>
      </Formik>

        <h1>{sumaGastosMensual}</h1>

    </>
  );
};

export default PaginaEstadistica;
