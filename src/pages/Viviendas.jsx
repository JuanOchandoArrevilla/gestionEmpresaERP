import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Viendas = () => {
  const [enviarFormulario, setEnviarFormulario] = useState(false);

  return (
    <div className="container">
      <h1>Crear Viviendas</h1>
      <div className="col-6">
        <div className="card mt-3 bg-dark">
          <div className="card-body ">
            <Formik
              initialValues={{
                propiedad: "",
                dirrecion: "",
                localidad: "",
                habitacion: "",
                personas: "",
                baños: "",
                tamaño: "",
                precio: "",
                disponible: "",
              }}
              validate={(valores) => {
                let errores = {};

                if (!valores.propiedad) {
                  errores.propiedad = "por favor ingrese un valor";
                }

                if (!valores.dirrecion) {
                  errores.dirrecion = "por favor ingrese una dirrecion";
                }

                if (!valores.localidad) {
                  errores.localidad = "por favor ingrese una localidad";
                }
                if (!valores.habitacion) {
                  errores.habitacion =
                    "por favor ingrese numeros de habitaciones";
                }

                if (!valores.personas) {
                  errores.personas = "por favor ingrese numeros de personas";
                }
                if (!valores.baños) {
                  errores.baños =
                    "por favor ingrese la cantida de baños de la vivienda";
                }

                if (!valores.tamaño) {
                  errores.tamaño = "por favor ingrese el tamaño de la vivienda";
                }

                if (!valores.precio) {
                  errores.precio =
                    "por favor ingrese el precio de la vivienda por noche";
                }

                if (!valores.disponible) {
                  errores.disponible = "por favor seleccione una opcion";
                }

                return errores;
              }}
              onSubmit={(valores, { resetForm }) => {
                resetForm();
                console.log(valores);
                console.log("Formulario enviado");

                setEnviarFormulario(true);
                setTimeout(() =>  setEnviarFormulario(false), 3000);
              }}

            >
              {({ errors }) => (
                <Form className="">
                  <div className="mb-3">
                    <label className="form-label colorLetras">
                      Nº Propiedad
                    </label>
                    <Field
                      type="number"
                      className="form-control"
                      id="propiedad"
                      name="propiedad"
                    />
                    <ErrorMessage
                      name="propiedad"
                      component={() => (
                        <div className="colorLetrasErroes">
                          {" "}
                          {errors.propiedad}{" "}
                        </div>
                      )}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label colorLetras">Dirreccion</label>
                    <Field
                      type="text"
                      className="form-control"
                      id="dirrecion"
                      name="dirrecion"
                    />
                    <ErrorMessage
                      name="dirrecion"
                      component={() => (
                        <div className="colorLetrasErroes">
                          {" "}
                          {errors.dirrecion}{" "}
                        </div>
                      )}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label colorLetras">Localidad</label>
                    <Field
                      type="text"
                      className="form-control"
                      id="localidad"
                      name="localidad"
                    />
                    <ErrorMessage
                      name="localidad"
                      component={() => (
                        <div className="colorLetrasErroes">
                          {errors.localidad}
                        </div>
                      )}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label colorLetras">
                      Nº Habitaciòn
                    </label>
                    <Field
                      type="number"
                      className="form-control"
                      id="habitacion"
                      name="habitacion"
                    />
                    <ErrorMessage
                      name="habitacion"
                      component={() => (
                        <div className="colorLetrasErroes">
                          {errors.habitacion}
                        </div>
                      )}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label colorLetras">
                      Nº Personas
                    </label>
                    <Field
                      type="number"
                      className="form-control"
                      id="personas"
                      name="personas"
                    />
                    <ErrorMessage
                      name="personas"
                      component={() => (
                        <div className="colorLetrasErroes">
                          {errors.personas}
                        </div>
                      )}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label colorLetras">Baños</label>
                    <Field
                      type="number"
                      className="form-control"
                      id="baños"
                      name="baños"
                    />
                    <ErrorMessage
                      name="baños"
                      component={() => (
                        <div className="colorLetrasErroes">{errors.baños}</div>
                      )}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label colorLetras">
                      Tamaño MTS2
                    </label>
                    <Field
                      type="number"
                      className="form-control"
                      id="tamaño"
                      name="tamaño"
                    />
                    <ErrorMessage
                      name="tamaño"
                      component={() => (
                        <div className="colorLetrasErroes">{errors.tamaño}</div>
                      )}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label colorLetras">
                      Precio/Noche €
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
                    <label className="form-label colorLetras">
                      Disponibilidad
                    </label>
                    <br></br>
                    <Field name="disponible" as="select">
                      <option value=" "></option>
                      <option value="disponible">disponible</option>
                      <option value="no disponible">no disponible</option>
                    </Field>
                    <ErrorMessage
                      name="disponible"
                      component={() => (
                        <div className="colorLetrasErroes">
                          {" "}
                          {errors.disponible}{" "}
                        </div>
                      )}
                    />
                  </div>

                  <button className="btn btn-primary" type="submit">
                    Guardar Vivienda
                  </button>
                  {enviarFormulario && (
                    <p className="enviarDatos">Datos guardado</p>
                  )}
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Viendas;
