import React, { useState, useEffect } from "react";
import "./css/PageEstadistica.css";
import {
  calcularIngresoAno,
  calcularAñoGastos,
  calcularAñoLimpieza,
  calcularMensual,
  calcularMesLimpieza,
  calcularIngresoMensual,
} from "../Services/services";
import { Formik, Form, Field } from "formik";
const PaginaEstadistica = () => {
  const [fechas, setFechas] = useState({
    Fecha: "",
  });

  const [añoGastos, setAñoGastos] = useState([]);
  const [añoLimpieza, setAñoLimpieza] = useState([]);
  const [ingresoAno, setIngresoAno] = useState([]);
  const [ingresoMes, setIngresoMes] = useState([]);
  const [sumaGastos, setSumaGastos] = useState("");
  const [sumaIngresos, setSumaIngresos] = useState("");
  const [mesGastos, setMesGastos] = useState([]);
  const [mesLimpieza, setMesLimpieza] = useState([]);
  const [sumaGastosMensual, setSumaGastosMensual] = useState("");
  const [sumaIngresoMensual, setSumaIngresoMensual] = useState("");
  const [totalMes, setTotalMes] = useState("");
  const [numMes, setNumMes] = useState("");
  const [mes, setMes] = useState("");
  const [year, setYear] = useState("");
  const [totalYear, setTotalYear] = useState("");
  const [anualColor, setAnualColor] = useState(false);
  const [mensualColor, setMensualColor] = useState(null);

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
  };

  const gastosMesLimpieza = async (fecha) => {
    const gasto = await calcularMesLimpieza(fecha);
    setMesLimpieza(gasto);
  };

  const mesIngreso = async (fecha) => {
    const ingreso = await calcularIngresoMensual(fecha);
    setIngresoMes(ingreso);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFechas((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    gastosAño(fechas.Fecha);
    gastoLimpieza(fechas.Fecha);
    anoIngreso(fechas.Fecha);
    let anio = fechas.Fecha.substring(0, 4);
    setYear(anio);
  };

  useEffect(() => {
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
    setTotalYear(ingresos - gastos);
  });

  const changeColorAno = () => {
    if (totalYear > 0) {
      setAnualColor(false);
    } else {
      setAnualColor(true);
    }
  };

  useEffect(() => {
    let gastos = 0;
    let ingresos = 0;
    // eslint-disable-next-line array-callback-return
    mesGastos.map((s) => {
      gastos += s.pago;
    });
    // eslint-disable-next-line array-callback-return
    mesLimpieza.map((s) => {
      gastos += s.pago;
    });
    // eslint-disable-next-line array-callback-return
    ingresoMes.map((s) => {
      ingresos += s.pago;
    });
    setSumaGastosMensual(gastos);
    setSumaIngresoMensual(ingresos);
    setTotalMes(ingresos - gastos);

    switch (numMes) {
      case "01":
        setMes("enero");
        break;
      case "02":
        setMes("febrero");
        break;
      case "03":
        setMes("marzo");
        break;
      case "04":
        setMes("abril");
        break;
      case "05":
        setMes("mayo");
        break;
      case "06":
        setMes("junio");
        break;
      case "07":
        setMes("julio");
        break;
      case "08":
        setMes("agosto");
        break;
      case "09":
        setMes("septiembre");
        break;
      case "10":
        setMes("octubre");
        break;
      case "11":
        setMes("noviembre");
        break;
      case "12":
        setMes("diciembre");
        break;
      default:
        break;
    }
  });

  const changeColor = () => {
    if (totalMes > 0) {
      setMensualColor(false);
    } else {
      setMensualColor(true);
    }
  };

  return (
    <>
      <div className="anual">
        <h1>informe de Gastos e Ingresos en el año:</h1>
        <form className="formAño" onSubmit={handleSubmit}>
          <br />
          <label>fecha entrada:</label>
          <input
            type="date"
            name="Fecha"
            value={fechas.Fecha}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="btn btn-success"
            onClick={() => changeColorAno()}
          >
            buscar año
          </button>
        </form>

        <div className="scroll">
          <table className="table table-striped ">
            <thead className="table-dark">
              <tr>
                <th scope="col">año</th>
                <th scope="col">Ingresos</th>
                <th scope="col">Gastos</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">{year}</th>
                <td>{`${sumaIngresos}€`}</td>
                <td>{`${sumaGastos}€ `}</td>
                <td
                  style={anualColor ? { color: "green" } : { color: "red" }}
                >{`${totalYear}€`}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mensual">
        <h1>informe de Gastos e Ingresos mensual:</h1>
        <Formik
          initialValues={{
            mes: "",
          }}
          onSubmit={(valores, { resetForm }) => {
            resetForm();
            gastoMes(valores.mes);
            gastosMesLimpieza(valores.mes);
            mesIngreso(valores.mes);
            setNumMes(valores.mes);
          }}
        >
          <Form>
            <div className="mb-3">
              <label>mes:</label>
              <Field type="number" name="mes" as="select">
                <option value="0"> ""</option>
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
              <button className="btn btn-success" onClick={() => changeColor()} type="submit">
                buscar mes
              </button>
            </div>
          </Form>
        </Formik>

        <div className="scroll">
          <table className="table table-striped ">
            <thead className="table-dark">
              <tr>
                <th scope="col">Mes</th>
                <th scope="col">Ingresos</th>
                <th scope="col">Gastos</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">{mes}</th>
                <td>{`${sumaIngresoMensual}€`}</td>
                <td>{`${sumaGastosMensual}€ `}</td>
                <td
                  style={mensualColor ? { color: "green" } : { color: "red" }}
                >{`${totalMes}€`}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default PaginaEstadistica;
