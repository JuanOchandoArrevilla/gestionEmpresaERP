import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Viendas = ({ insertVivienda }) => {
  const [enviarFormulario, setEnviarFormulario] = useState(false);

  return (
    <div className="formVivienda">
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
                Direccion: "",
                Num_Habitacion: "",
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
                } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.Provincia)) {
                  errores.Provincia =
                    "por favor ingrese una provincia correcto";
                }

                if (!valores.Municipio) {
                  errores.Municipio = "por favor ingrese un valor";
                } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.Municipio)) {
                  errores.Municipio =
                    "por favor ingrese una Municipio correcto";
                }

                if (!valores.Direccion) {
                  errores.Direccion = "por favor ingrese una Direccion";
                } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.Direccion)) {
                  errores.Direccion =
                    "por favor ingrese una Direccion correcto";
                }

                if (!valores.Localidad) {
                  errores.Localidad = "por favor ingrese una Localidad";
                } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.Localidad)) {
                  errores.Localidad =
                    "por favor ingrese una Localidad correcto";
                }
                if (!valores.Num_Habitacion) {
                  errores.Num_Habitacion =
                    "por favor ingrese numeros de Num_Habitaciones";
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

                insertVivienda(valores);
                
                console.log(JSON.stringify(valores));
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
                    <label className="form-label colorLetras">Direccion</label>
                    <Field
                      type="text"
                      className="form-control"
                      id="Direccion"
                      name="Direccion"
                      placeholder="Calle rosa de caleya"
                    />
                    <ErrorMessage
                      name="Direccion"
                      component={() => (
                        <div className="colorLetrasErroes">
                          {" "}
                          {errors.Direccion}{" "}
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
