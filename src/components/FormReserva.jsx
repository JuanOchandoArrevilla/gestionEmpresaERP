
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";


const Reserva = () => {

  return (
    <> 
    <div className="formReserva">
      <h1>Crear Reserva</h1>
      <div className="col-2">
        <div className="card mt-3 bg-dark">
          <div className="card-body ">
            <Formik
              initialValues={{
                Num_Reservacion: "",
                Nombre: "",
                Fecha_Entrada: "",
                Fecha_Salida: "",
                Telefono: "",
                Email: "",
                Precio_Total: "",
                Num_Propiedad_Vivienda: "",
              }}
              validate={(valores) => {
                let errores = {};

                if (!valores.Num_Reservacion) {
                  errores.Num_Reservacion = "por favor ingrese un valor";
                }

                if (!valores.Nombre) {
                  errores.Nombre = "por favor ingrese un valor";
                }

                if (!valores.Telefono) {
                  errores.Telefono = "por favor ingrese un valor";
                }
                if (!valores.Email) {
                  errores.Email = "por favor ingrese valor";
                } else if (
                  !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                    valores.Email
                  )
                ) {
                  errores.Email = "el correo esta malo";
                }

                if (!valores.Precio_Total) {
                  errores.Precio_Total = "por favor ingrese el Precio_Total a pagar";
                }

                if (!valores.Num_Propiedad_Vivienda) {
                  errores.Num_Propiedad_Vivienda = "por favor ingrese un valor";
                }

                return errores;
              }}
              onSubmit={(valores, { resetForm }) => {
                
                resetForm();
                console.log(JSON.stringify(valores));
                console.log("Formulario enviado");

                // setEnviarFormulario(true);
                // setTimeout(() =>  setEnviarFormulario(false), 3000);
              }}
            >
              {({ errors }) => (
                <Form className="">
                  <div className="mb-3">
                    <label className="form-label colorLetras">Nº Reservación</label>
                    <Field
                      type="text"
                      className="form-control"
                      id="Num_Reservacion"
                      name="Num_Reservacion"
                      placeholder="ejemplo 22112"
                    />
                    <ErrorMessage
                      name="Num_Reservacion"
                      component={() => (
                        <div className="colorLetrasErroes">{errors.Num_Reservacion}</div>
                      )}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label colorLetras">Nombre</label>
                    <Field
                      type="text"
                      className="form-control"
                      id="Nombre"
                      name="Nombre"
                      placeholder="jonh doe"
                    />
                    <ErrorMessage
                      name="Nombre"
                      component={() => (
                        <div className="colorLetrasErroes">{errors.Nombre}</div>
                      )}
                    />
                  </div>
                  
                  <div className="mb-3">
                    <label className="form-label colorLetras">
                      Fecha Entrada
                    </label>
                    <Field
                      type="date"
                      className="form-control"
                      id="Fecha_Entrada"
                      name="Fecha_Entrada"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label colorLetras">
                      Fecha Salida
                    </label>    
                    <Field
                      type="date"
                      className="form-control"
                      id="Fecha_Salida"
                      name="Fecha_Salida"
                    />
                  </div>
                  

                  <div className="mb-3">
                    <label className="form-label colorLetras">Telefono</label>
                    <Field
                      type="text"
                      className="form-control"
                      id="Telefono"
                      name="Telefono"
                      placeholder="666212454"
                    />
                    <ErrorMessage
                      name="Telefono"
                      component={() => (
                        <div className="colorLetrasErroes">
                          {errors.Telefono}
                        </div>
                      )}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label colorLetras">Email</label>
                    <Field
                      type="text"
                      className="form-control"
                      id="Email"
                      name="Email"
                      placeholder="correo@gmail.com"
                    />
                    <ErrorMessage
                      name="Email"
                      component={() => (
                        <div className="colorLetrasErroes">{errors.Email}</div>
                      )}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label colorLetras">
                      Precio Total
                    </label>
                    <Field
                      type="number"
                      step="0.01"
                      className="form-control"
                      id="Precio_Total"
                      name="Precio_Total"
                      placeholder="cantidad de € a pagar "
                    />
                    <ErrorMessage
                      name="Precio_Total"
                      component={() => (
                        <div className="colorLetrasErroes">{errors.Precio_Total}</div>
                      )}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label colorLetras">numero de Vivienda:</label>
                    <Field
                      type="text"
                      step="0.01"
                      className="form-control"
                      id="Num_Propiedad_Vivienda"
                      name="Num_Propiedad_Vivienda"
                      placeholder="codigo de Num_Propiedad_Vivienda"
                    />
                    <ErrorMessage
                      name="Num_Propiedad_Vivienda"
                      component={() => (
                        <div className="colorLetrasErroes">
                          {errors.Num_Propiedad_Vivienda}
                        </div>
                      )}
                    />
                  </div>

                  <button className="btn btn-primary" type="submit">
                    Guardar Reserva
                  </button>
                  {/* {enviarFormulario && (
                    <p className="enviarDatos">Datos guardado</p> */}
                  {/* )} */}
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Reserva;
