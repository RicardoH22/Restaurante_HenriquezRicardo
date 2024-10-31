export const MenuCrear = () => {
  return (
    <>
      <div className="pt-5 d-flex justify-content-center">
        <div className="cold-md-6">
          <form className="row g-3 needs-validation">
            <div className="col-md-6">
              <label htmlFor="nomb" className="form-label">
                Nombre Plato
              </label>
              <input
                type="text"
                className="form-control border-black"
                id="nomb"
                name="nomb"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>

            <div className="col-md-6">
              <label htmlFor="acomp" className="form-label">
                Acompañamiento
              </label>
              <input
                type="text"
                className="form-control border-black"
                id="acomp"
                name="acomp"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>

            <div className="col-md-6">
              <label htmlFor="prec" className="form-label">
                Precio
              </label>
              <input
                type="text"
                className="form-control border-black"
                id="prec"
                name="prec"
                required
              />
              <div className="invalid-feedback">
                Please provide a valid city.
              </div>
            </div>

            <div className="col-md-6">
              <label htmlFor="regi" className="form-label">
                Region
              </label>
              <select
                className="form-select border-black"
                id="regi"
                name="regi"
                required
              >
                <option selected disabled value="">
                  Seleccione la Region
                </option>
                <option>Caribe</option>
                <option>Andina</option>
                <option>Pacifica</option>
                <option>Amazonia</option>
                <option>Orinoquia</option>
                <option>Insular</option>
              </select>
              <div className="invalid-feedback">
                Please select a valid state.
              </div>
            </div>

            <div className="col-12">
              <button className="btn btn-primary" type="submit">
                Registrar Plato
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
