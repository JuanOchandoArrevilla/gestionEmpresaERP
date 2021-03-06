import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";



const FormMantenimientos = ({viviendas, insertarMantenimiento}) => {

  return ( 
  
  <>
  <div className="formLimpieza">
      <h1>Infome de Mantenimiento y limpieza</h1>
      <div className="col-2">
        <div className="card mt-3 bg-dark">
          <div className="card-body ">
            <Formik
              initialValues={{
                Tipo: "",
                Nombre: "",
                Fecha_Inicio: "",
                Fecha_Terminada: "",
                Pago: "",
                Num_propiedad_Vivienda: "",
               
              }}
              validate={(valores) => {
                let errores = {};

                if (!valores.Tipo) {
                  errores.Tipo = "por favor ingrese un valor";
                }

                if (!valores.Nombre) {
                  errores.Nombre = "por favor ingrese un valor";
                } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.Nombre)) {
                  errores.Nombre =
                    "por favor ingrese una Nombre correcto";
                }

                
                if (!valores.Pago) {
                  errores.Pago =
                    "por favor ingrese numeros de Pagoes";
                }

                if (!valores.Num_propiedad_Vivienda ) {
                  errores.Num_propiedad_Vivienda = "por favor escoger una opcion";
                }
     

               

                return errores;
              }}
              onSubmit={(valores, { resetForm }) => {
                resetForm();  
                console.log(JSON.stringify(valores));
                insertarMantenimiento(valores)
               
              }}
            >
              {({ errors }) => (
                <Form className="">
                  <div className="mb-3">
                    <label className="form-label colorLetras">
                     tipo 
                    </label>
                    <Field name="Tipo" as="select"> 
                    
                   <option value="limpieza" selected> Limpieza</option> 
                   <option value="mantenimiento">Mantenimiento</option> 
                    </Field>
                    <ErrorMessage
                      name="Tipo"
                      component={() => (
                        <div className="colorLetrasErroes">
                          {" "}
                          {errors.Tipo}{" "}
                        </div>
                      )}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label colorLetras">Nombre de Empresa o Empleado</label>
                    <Field
                      type="text"
                      className="form-control"
                      id="Nombre"
                      name="Nombre"
                
                    />
                    <ErrorMessage
                      name="Nombre"
                      component={() => (
                        <div className="colorLetrasErroes">
                          {" "}
                          {errors.Nombre}{" "}
                        </div>
                      )}
                    />
                  </div>


                  <div className="mb-3">
                    <label className="form-label colorLetras">Fecha_Inicio</label>
                    <Field
                      type="date"
                      className="form-control"
                      id="Fecha_Inicio"
                      name="Fecha_Inicio"    
                    />
                   
                  </div>

                  <div className="mb-3">
                    <label className="form-label colorLetras">Fecha_Terminada</label>
                    <Field
                      type="date"
                      className="form-control"
                      id="Fecha_Terminada"
                      name="Fecha_Terminada"
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
                      name="Num_propiedad_Vivienda"
                      component={() => (
                        <div className="colorLetrasErroes">
                          {errors.Num_propiedad_Vivienda}
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

export default FormMantenimientos;
