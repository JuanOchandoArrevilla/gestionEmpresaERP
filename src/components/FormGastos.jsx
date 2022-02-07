import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";


const FormGastos = ({viviendas = [], insertarGastos}) => {
  return (
  <>
  <div className="formLimpieza">
      <h1>Infome de Gastos o Factura</h1>
      <div className="col-2">
        <div className="card mt-3 bg-dark">
          <div className="card-body ">
            <Formik
              initialValues={{
                Tipo: "",
                Fecha: "",
                Pago: "",
                Num_propiedad_Vivienda: "",
               
              }}
              validate={(valores) => {
                let errores = {};

                if (!valores.Tipo) {
                  errores.Tipo = "por favor ingrese un valor";
                }else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.Tipo)) {
                  errores.Tipo = "por favor ingrese una factura";
                }
              
                if (!valores.Pago) {
                  errores.Pago = "por favor ingrese numeros de Pago";     
                }

                if (!valores.Num_propiedad_Vivienda ) {
                  errores.Num_propiedad_Vivienda = "por favor escoger una opcion";
                }
     

                return errores;
              }}
              onSubmit={(valores, { resetForm }) => {
                resetForm();  
                // console.log(JSON.stringify(valores));
                insertarGastos(valores);
                
               
              }}
            >
              {({ errors }) => (
                <Form className="">
                  <div className="mb-3">
                    <label className="form-label colorLetras">Tipo:</label>
                    <Field
                      type="text"
                      className="form-control"
                      id="Tipo"
                      name="Tipo"
                    />
                   <ErrorMessage
                      name="Tipo"
                      component={() => (
                        <div className="colorLetrasErroes">
                          {errors.Tipo}
                        </div>
                      )}
                    />
                  </div>

                
                  <div className="mb-3">
                    <label className="form-label colorLetras">Fecha</label>
                    <Field
                      type="date"
                      className="form-control"
                      id="Fecha"
                      name="Fecha"    
                    />
                   
                  </div>

               

                  <div className="mb-3">
                    <label className="form-label colorLetras">
                     pago:
                    </label>
                    <Field
                      type="number"
                      className="form-control"
                      id="Pago"
                      name="Pago"
                      
                    />
                    <ErrorMessage
                      name="Pago"
                      component={() => (
                        <div className="colorLetrasErroes">
                          {errors.Pago}
                        </div>
                      )}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label colorLetras">numero de Vivienda:</label>
                    <Field  className="form-control" name="Num_propiedad_Vivienda" as="select" >
                    <option  value=""></option> 
                      {viviendas.map((item) => (
                        <option key={item.Num_propiedad} value={item.Num_propiedad}>{item.Num_propiedad}</option> 
                      ))}
                         
                      
                   </Field>
                   <ErrorMessage
                      name="Num_propiedad"
                      component={() => (
                        <div className="colorLetrasErroes">
                          {errors.Num_propiedad}
                        </div>
                      )}
                    />
                   
                  </div>

            
                  <button className="btn btn-primary" type="submit" >
                    Guardar Informe
                  </button>
                 
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  </>);
};

export default FormGastos;
