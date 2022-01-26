import React, { useState } from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";

const FormUsuarios = ({ insertarUser }) => {
  const [enviarFormulario, setEnviarFormulario] = useState(false);
  return (
    <>
    
      <div className="formUsuario colorLetras ">
        <h1>Crear Usuarios</h1>
        <div className="col-2">
          <div className="card w-auto p-3 bg-dark">
            <div className="card-body ">
              <Formik
                initialValues={{
                  usuario: "",
                  password: "",
                  roles: "",
                }}
                validate={(valores) => {
                  let errores = {};

                  if (!valores.usuario) {
                    errores.usuario = "por favor ingrese un valor";
                  }else if (!/^\w{6,10}$/.test(valores.usuario)) {
                    errores.usuario = "error usuario requieres 6-10 caracteres sin caracter especial";
                  }
                  if (!valores.password) {
                    errores.password = "por favor ingrese un valor";
                  }else if (!/^\w{8,15}$/.test(valores.password)) {
                    errores.password = "8-15 caracteres sin caracter especial";
                  }

                  if (!valores.roles) {
                    errores.roles = "por favor ingrese un valor";
                  }

                  return errores;
                }}
                onSubmit={(valores, { resetForm }) => {
                  resetForm();

                  let roles = valores.roles;

                  let rol = "";
                  for (let i = 0; i < roles.length; i++) {
                    rol += "," + roles[i];
                  }
                  rol = rol.slice(1);
                  valores.roles = rol;
                  insertarUser(valores);
                  // setEnviarFormulario(true);
                  // setTimeout(() => setEnviarFormulario(false), 3000);
                }}
              >
                {({ errors }) => (
                  <Form className="">
                    <div className="mb-3">
                      <label className="form-label colorLetras">usuario:</label>
                      <Field
                        type="text"
                        className="form-control"
                        id="usuario"
                        name="usuario"
                      />
                      <ErrorMessage
                        name="usuario"
                        component={() => (
                          <div className="colorLetrasErroes">
                            {" "}
                            {errors.usuario}{" "}
                          </div>
                        )}
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label colorLetras">
                        Password:
                      </label>
                      <Field
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                      />
                      <ErrorMessage
                        name="password"
                        component={() => (
                          <div className="colorLetrasErroes">
                            {" "}
                            {errors.password}{" "}
                          </div>
                        )}
                      />
                    </div>
                    <div className="tamañoTitleRoles">
                      asignar los diferentes roles al usuario:
                    </div>
                    <div className="LetrasUsuarios" id="checkbox-group">
                      roles
                    </div>
                    <div
                      className="LetrasUsuarios"
                      role="group"
                      aria-labelledby="checkbox-group"
                    >
                      <label>
                        <Field
                          className="cuadroField"
                          type="checkbox"
                          name="roles"
                          value="Viviendas"
                        />
                        gestion de viviendas
                      </label>
                      <label>
                        <Field
                          className="cuadroField"
                          type="checkbox"
                          name="roles"
                          value="Reservas"
                        />
                        gestion de reservas
                      </label>
                      <label>
                        <Field
                          className="cuadroField"
                          type="checkbox"
                          name="roles"
                          value="Mantenimiento y Limpieza"
                        />
                        gestion de Mantenimiento y Limpieza
                      </label>

                      <label>
                        <Field
                          className="cuadroField"
                          type="checkbox"
                          name="roles"
                          value="Usuarios"
                        />
                        gestion de usuarios
                      </label>
                    </div>

                    <button className="btn btn-primary formUsuarioBoton" type="submit">
                      Guardar Usuario
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
    </>
  );
};

export default FormUsuarios;
