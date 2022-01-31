import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Registro = ({ show, onHide , insertarUser}) => {
  const [mostrarMensaje,setMostrarMensaje] = useState(false);

  const cerrar3seg = () => {
    onHide();
  };
  return (
    <>
      <div
        id="myModal"
        className="modal"
        role="dialog"
        style={show ? { display: "block" } : { display: "none" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Registrar usuario Administrador</h4>
              <button
                type="button"
                onClick={onHide}
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
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

                  
                  setMostrarMensaje(true);
                  insertarUser(valores);
                  setTimeout(() => cerrar3seg(), 3000);
                }}
              >
                {({ errors }) => (
                  <Form>
                    <div className="mb-3">
                      {/* <label className="form-label colorLetras">Usuario:</label> */}
                      <div>Usuario:</div>
                      <Field
                        type="text"
                        className="form-control"
                        id="usuario"
                        name="usuario"
                        placeholder=""
                      />
                      <ErrorMessage
                        name="usuario"
                        component={() => (
                          <div className="colorLetrasErroes">
                            {errors.usuario}
                          </div>
                        )}
                      />
                    </div>

                    <div className="mb-3">
                      <div>Password</div>
                      <Field
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        placeholder=""
                      />
                      <ErrorMessage
                        name="password"
                        component={() => (
                          <div className="colorLetrasErroes">
                            {errors.password}
                          </div>
                        )}
                      />
                    </div>

                    <div className="mb-3">
                    <div>rol por defecto administrador</div>
                    <Field  className="form-control" name="roles" as="select" >
                     
                        <option  value="">""</option> 
                        <option value="administrador">administrador </option>
                    
                         
                      
                   </Field>
                    <ErrorMessage
                      name="Num_Propiedad_Vivienda"
                      component={() => (
                        <div className="colorLetrasErroes">
                          {errors.Num_Propiedad_Vivienda}
                        </div>
                      )}
                    />
                  </div>

                    <div>
                      {" "}
                      {mostrarMensaje ? <p> usuario guardardo</p> : null}
                      <button className="btn btn-primary" type="submit">
                        guardar usuario
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
            <div className="modal-footer">
              <button
                onClick={onHide}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Registro;
