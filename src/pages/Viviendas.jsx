import React from "react";

const Viendas = () => {
  return (
    <div className="container">
      <h1>Crear Viviendas</h1>
      <div className="col-6">
        <div className="card mt-3">
          <div className="card-body">
            <form bg-dark>
              <div className="mb-3">
                <label className="form-label">Nº Propiedad</label>
                <input
                  type="number"
                  className="form-control"
                  id="propiedad"
                  name="propiedad"
                  //   value={post.Propiedad}
                  //   onChange={handleChange}
                ></input>
              </div>

              <div className="mb-3">
                <label className="form-label">Dirreccion</label>
                <input
                  type="text"
                  className="form-control"
                  id="dirreccion"
                  name="dirreccion"
                  //   value={post.dirreccion}
                  //   onChange={handleChange}
                ></input>
              </div>

              <div className="mb-3">
                <label className="form-label">Nº Habitaciòn</label>
                <input
                  type="number"
                  className="form-control"
                  id="habitacion"
                  name="habitacion"
                  //   value={post.habitacion}
                  //   onChange={handleChange}
                ></input>
              </div>

              <div className="mb-3">
                <label className="form-label">Nº Personas</label>
                <input
                  type="number"
                  className="form-control"
                  id="personas"
                  name="personas"
                  //   value={post.personas}
                  //   onChange={handleChange}
                ></input>
              </div>

              <div className="mb-3">
                <label className="form-label">Baños</label>
                <input
                  type="number"
                  className="form-control"
                  id="baños"
                  name="baños"
                  //   value={post.baños}
                  //   onChange={handleChange}
                ></input>
              </div>

              <div className="mb-3">
                <label className="form-label">Tamaño MTS2</label>
                <input
                  type="number"
                  className="form-control"
                  id="tamaño"
                  name="tamaño"
                  //   value={post.tamaño}
                  //   onChange={handleChange}
                ></input>
              </div>

              <div className="mb-3">
                <label className="form-label">Precio/Noche €</label>
                <input
                  type="number"
                  step="0.01"
                  className="form-control"
                  id="precio"
                  name="precio"
                  //   value={post.precio}
                  //   onChange={handleChange}
                ></input>
              </div>
              <div className="mb-3">
                <label className="form-label">Disponibilidad</label>
                <br></br>
                <select>
                  <option value="disponible">disponible</option>
                  <option value="no disponible">no disponible</option>
                </select>
              </div>

              <button className="btn btn-primary" type="submit">
                Guardar Vivienda
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Viendas;
