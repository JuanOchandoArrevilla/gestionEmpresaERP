import React, { useState } from "react";

const Login = ({ registroModal, userAmin, comprobarUsuario }) => {
  const [usuario, setUsuario] = useState({
    user: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setUsuario((data) => ({
      ...data,
      [name]: value,
     
    }));
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    // e.target.resetForm();
    comprobarUsuario(usuario);
    
  };

  return (
    <>
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-dark text-white">
                <div className="card-body p-5 text-center">
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                    <form className="login-form" onSubmit={handleSubmit}>  
                    <div className="form-outline form-white mb-4">
                      <label className="form-label" >
                        Usuario
                      </label>
                      <input
                        type="user"
                        name="user"
                        className="form-control form-control-lg"
                        value={usuario.user}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-outline form-white mb-4">
                      <label className="form-label" >
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        className="form-control form-control-lg"
                        value={usuario.password}
                        onChange={ handleChange}
                        
                      />
                    </div>

                    <button
                      className="btn btn-outline-light btn-lg px-5"
                      type="submit"
                    >
                      Ingresar
                    </button>
                    </form>
                    {userAmin ? null : (
                      <div>
                        <button
                          className="btn btn-outline-light btn-lg px-5 registe"
                          onClick={() => registroModal()}
                        >
                          Registrar
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
