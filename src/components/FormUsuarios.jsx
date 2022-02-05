import React, { useState } from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";

const FormUsuarios = ({ insertarUser }) => {
  


 
  return (
    <>
    <h1 className="tituloListUsuario" >Alta Usuarios</h1>
      <div className="formUsuario colorLetras   ">
        <div className="col-5 " >
          <div className="card mt-3 bg-dark  ">
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
                          value="Mantenimientos"
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
                      <label>
                        <Field
                          className="cuadroField"
                          type="checkbox"
                          name="roles"
                          value="Estadisticas"
                        />
                        gestion de estadisticas
                      </label>
                    
                    </div>

                    <button className="btn btn-primary formUsuarioBoton" type="submit" >
                      Guardar Usuario
                      
                    </button>
                   
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
