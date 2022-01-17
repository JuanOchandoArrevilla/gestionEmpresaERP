import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";


const Viendas = ({insertVivienda}) => {
  const [enviarFormulario, setEnviarFormulario] = useState(false);

  return (
    <div className="formPosicion">
      <h1>Crear Viviendas</h1>
      <div className="col-2">
        <div className="card mt-3 bg-dark">
          <div className="card-body ">
            <Formik
              initialValues={{
                Num_propiedad: "",
                Provincia: "",
                Municipio: "",
                Localidad: "",
                Dirrecion: "",
                Num_Habitacion: "",
                Num_Personas: "",
                Baños: "",
                Tamaño_MTS: "",
                Precio_Noche: "",
              }}
              validate={(valores) => {
                let errores = {};

                if (!valores.Num_propiedad) {
                  errores.Num_propiedad = "por favor ingrese un valor";
                }

                if (!valores.Provincia) {
                  errores.Provincia = "por favor ingrese un valor";
                }

                if (!valores.Municipio) {
                  errores.Municipio = "por favor ingrese un valor";
                }

                if (!valores.Dirrecion) {
                  errores.Dirrecion = "por favor ingrese una Dirrecion";
                }

                if (!valores.Localidad) {
                  errores.Localidad = "por favor ingrese una Localidad";
                }
                if (!valores.Num_Habitacion) {
                  errores.Num_Habitacion =
                    "por favor ingrese numeros de Num_Habitaciones";
                }

                if (!valores.Num_Personas) {
                  errores.Num_Personas =
                    "por favor ingrese numeros de Num_Personas";
                }
                if (!valores.Baños) {
                  errores.Baños =
                    "por favor ingrese la cantida de Baños de la vivienda";
                }

                if (!valores.Tamaño_MTS) {
                  errores.Tamaño_MTS =
                    "por favor ingrese el Tamaño_MTS de la vivienda";
                }

                if (!valores.Precio_Noche) {
                  errores.Precio_Noche =
                    "por favor ingrese el Precio_Noche de la vivienda por noche";
                }

                return errores;
              }}
              onSubmit={(valores, { resetForm }) => {
                resetForm();

                // console.log(JSON.stringify(valores));
                
                insertVivienda(valores);
                console.log("Formulario enviado");
                setEnviarFormulario(true);
                setTimeout(() => setEnviarFormulario(false), 3000);
              }}
            >
              {({ errors }) => (
                <Form className="">
                  <div className="mb-3">
                    <label className="form-label colorLetras">
                      Nº Propiedad:
                    </label>
                    <Field
                      type="number"
                      className="form-control"
                      id="Num_propiedad"
                      name="Num_propiedad"
                      placeholder="ejem 12212"
                    />
                    <ErrorMessage
                      name="Num_propiedad"
                      component={() => (
                        <div className="colorLetrasErroes">
                          {" "}
                          {errors.Num_propiedad}{" "}
                        </div>
                      )}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label colorLetras">Provincia</label>
                    <Field
                      type="text"
                      className="form-control"
                      id="Provincia"
                      name="Provincia"
                      placeholder="Santa cruz de tenerife"
                    />
                    <ErrorMessage
                      name="Provincia"
                      component={() => (
                        <div className="colorLetrasErroes">
                          {" "}
                          {errors.Provincia}{" "}
                        </div>
                      )}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label colorLetras">Municipio</label>
                    <Field
                      type="text"
                      className="form-control"
                      id="Municipio"
                      name="Municipio"
                      placeholder="Santa Cruz"
                    />
                    <ErrorMessage
                      name="Municipio"
                      component={() => (
                        <div className="colorLetrasErroes">
                          {errors.Municipio}
                        </div>
                      )}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label colorLetras">Localidad</label>
                    <Field
                      type="text"
                      className="form-control"
                      id="Localidad"
                      name="Localidad"
                      placeholder="taco"
                    />
                    <ErrorMessage
                      name="Localidad"
                      component={() => (
                        <div className="colorLetrasErroes">
                          {errors.Localidad}
                        </div>
                      )}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label colorLetras">Dirreccion</label>
                    <Field
                      type="text"
                      className="form-control"
                      id="Dirrecion"
                      name="Dirrecion"
                      placeholder="Calle rosa de caleya"
                    />
                    <ErrorMessage
                      name="Dirrecion"
                      component={() => (
                        <div className="colorLetrasErroes">
                          {" "}
                          {errors.Dirrecion}{" "}
                        </div>
                      )}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label colorLetras">
                      Nº Habitación:
                    </label>
                    <Field
                      type="number"
                      className="form-control"
                      id="Num_Habitacion"
                      name="Num_Habitacion"
                      placeholder="Num_Habitaciones Disponibilidads"
                    />
                    <ErrorMessage
                      name="Num_Habitacion"
                      component={() => (
                        <div className="colorLetrasErroes">
                          {errors.Num_Habitacion}
                        </div>
                      )}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label colorLetras">
                      Nº Num_Personas:
                    </label>
                    <Field
                      type="number"
                      className="form-control"
                      id="Num_Personas"
                      name="Num_Personas"
                      placeholder="numeros de Num_Personas"
                    />
                    <ErrorMessage
                      name="Num_Personas"
                      component={() => (
                        <div className="colorLetrasErroes">
                          {errors.Num_Personas}
                        </div>
                      )}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label colorLetras">Baños</label>
                    <Field
                      type="number"
                      className="form-control"
                      id="Baños"
                      name="Baños"
                      placeholder="cantidad de Baños"
                    />
                    <ErrorMessage
                      name="Baños"
                      component={() => (
                        <div className="colorLetrasErroes">{errors.Baños}</div>
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
                      id="Tamaño_MTS"
                      name="Tamaño_MTS"
                      placeholder="MTS cuadros de la vivienda"
                    />
                    <ErrorMessage
                      name="Tamaño_MTS"
                      component={() => (
                        <div className="colorLetrasErroes">
                          {errors.Tamaño_MTS}
                        </div>
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
                      id="Precio_Noche"
                      name="Precio_Noche"
                      placeholder="Precio_Noche por noche"
                    />
                    <ErrorMessage
                      name="Precio_Noche"
                      component={() => (
                        <div className="colorLetrasErroes">
                          {errors.Precio_Noche}
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
