import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Registro = () => {
  return (
    <>
      <div className="col-2">
        <div className="card mt-3 bg-dark">
          <div className="card-body ">
            <Formik
              initialValues=
              {{
                usuario: "",
                password: "",
                roles: "",
              }}
              validate=
              {(valores) => {
                let errores = {};

                if (!valores.usuario) {
                  errores.usuario = "por favor ingrese un valor";
                }

                if (!valores.password) {
                  errores.password = "por favor ingrese un valor";
                }
                if (!valores.roles) {
                  errores.roles = "por favor ingrese un valor";
                }

                return errores;
              }}
              onSubmit=
              {(valores, { resetForm }) => {
                resetForm();

                // console.log(JSON.stringify(valores));
              }}
           >
            {({ errors }) => (
              <Form>
                <div className="mb-3">
                  <label className="form-label colorLetras">Usuario:</label>
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
                      <div className="colorLetrasErroes">{errors.usuario}</div>
                    )}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label colorLetras">Password:</label>
                  <Field
                    type="text"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder=""
                  />
                  <ErrorMessage
                    name="password"
                    component={() => (
                      <div className="colorLetrasErroes">{errors.password}</div>
                    )}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label colorLetras">Roles:</label>
                  <Field
                    type="text"
                    className="form-control"
                    id="roles"
                    name="roles"
                    placeholder=""
                  />
                  <ErrorMessage
                    name="roles"
                    component={() => (
                      <div className="colorLetrasErroes">{errors.roles}</div>
                    )}
                  />
                </div>
              </Form>
            )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};
export default Registro;
