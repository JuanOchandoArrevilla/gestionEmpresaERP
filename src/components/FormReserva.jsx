
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";


const Reserva = () => {

  return (
    <> 
    <div className="formPosicion">
      <h1>Crear Reserva</h1>
      <div className="col-2">
        <div className="card mt-3 bg-dark">
          <div className="card-body ">
            <Formik
              initialValues={{
                dni: "",
                nombre: "",
                fecha_Entrada: "",
                fecha_Salida: "",
                telefono: "",
                email: "",
                precio: "",
                vivienda: "",
              }}
              validate={(valores) => {
                let errores = {};

                if (!valores.dni) {
                  errores.dni = "por favor ingrese un valor";
                }

                if (!valores.nombre) {
                  errores.nombre = "por favor ingrese un valor";
                }

                if (!valores.telefono) {
                  errores.telefono = "por favor ingrese un valor";
                }
                if (!valores.email) {
                  errores.email = "por favor ingrese valor";
                } else if (
                  !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                    valores.email
                  )
                ) {
                  errores.email = "el correo esta malo";
                }

                if (!valores.precio) {
                  errores.precio = "por favor ingrese el precio a pagar";
                }

                if (!valores.vivienda) {
                  errores.vivienda = "por favor ingrese un valor";
                }

                return errores;
              }}
              onSubmit={(valores, { resetForm }) => {
                resetForm();
                console.log(valores);
                console.log("Formulario enviado");

                // setEnviarFormulario(true);
                // setTimeout(() =>  setEnviarFormulario(false), 3000);
              }}
            >
              {({ errors }) => (
                <Form className="">
                  <div className="mb-3">
                    <label className="form-label colorLetras">DNI</label>
                    <Field
                      type="text"
                      className="form-control"
                      id="dni"
                      name="dni"
                    />
                    <ErrorMessage
                      name="dni"
                      component={() => (
                        <div className="colorLetrasErroes">{errors.dni}</div>
                      )}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label colorLetras">Nombre</label>
                    <Field
                      type="text"
                      className="form-control"
                      id="nombre"
                      name="nombre"
                    />
                    <ErrorMessage
                      name="nombre"
                      component={() => (
                        <div className="colorLetrasErroes">{errors.nombre}</div>
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
                      id="fecha_Entrada"
                      name="fecha_Entrada"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label colorLetras">
                      Fecha Salida
                    </label>    
                    <Field
                      type="date"
                      className="form-control"
                      id="fecha_Salida"
                      name="fecha_Salida"
                    />
                  </div>
                  

                  <div className="mb-3">
                    <label className="form-label colorLetras">Telefono</label>
                    <Field
                      type="text"
                      className="form-control"
                      id="telefono"
                      name="telefono"
                    />
                    <ErrorMessage
                      name="telefono"
                      component={() => (
                        <div className="colorLetrasErroes">
                          {errors.telefono}
                        </div>
                      )}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label colorLetras">Email</label>
                    <Field
                      type="text"
                      className="form-control"
                      id="email"
                      name="email"
                    />
                    <ErrorMessage
                      name="email"
                      component={() => (
                        <div className="colorLetrasErroes">{errors.email}</div>
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
                      id="precio"
                      name="precio"
                    />
                    <ErrorMessage
                      name="precio"
                      component={() => (
                        <div className="colorLetrasErroes">{errors.precio}</div>
                      )}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label colorLetras">Vivienda:</label>
                    <Field
                      type="text"
                      step="0.01"
                      className="form-control"
                      id="vivienda"
                      name="vivienda"
                    />
                    <ErrorMessage
                      name="vivienda"
                      component={() => (
                        <div className="colorLetrasErroes">
                          {errors.vivienda}
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
