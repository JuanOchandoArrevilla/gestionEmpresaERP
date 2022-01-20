import React, { useState } from "react";

const Login = () => {

  const registro = () => {

  }

  return (
    <>
   <section className="vh-100 gradient-custom">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card bg-dark text-white" >
          <div className="card-body p-5 text-center">

            <div className="mb-md-5 mt-md-4 pb-5">

              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              {/* <p className="text-white-50 mb-5">Please enter your login and password!</p> */}

              <div className="form-outline form-white mb-4">
                <label className="form-label" for="typeEmailX">Usuario</label>
                <input type="email" id="typeEmailX" className="form-control form-control-lg" />   
              </div>

              <div className="form-outline form-white mb-4">
              <label className="form-label" for="typePasswordX">Password</label>
                <input type="password" id="passwordX" className="form-control form-control-lg" />   
              </div>

              {/* <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p> */}

              <button className="btn btn-outline-light btn-lg px-5" type="submit">Ingresar</button>
            <div> 
              <button className="btn btn-outline-light btn-lg px-5 registe" onClick={() => registro()}>Registrar</button>
              </div>
            </div>

            {/* <div>
              <p className="mb-0">Don't have an account? <a href="#!" className="text-white-50 fw-bold">Sign Up</a></p>
            </div> */}

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
