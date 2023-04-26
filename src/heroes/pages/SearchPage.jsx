import { HeroCard } from "../components";

export const SearchPage = () => {
  return (
    <>
      <h1>Busqueda de héroes</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Busquedas</h4>
          <hr />
          <form>
            <input
              type="text"
              placeholder="Busca tu héroe favorito"
              name="searchText"
              autoComplete="off"
              className="form-control"
            />
            <button className="btn btn-outline-primary btn-light mt-2">
              Buscar
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Resultados</h4>
          <hr />

          <div className="alert alert-primary">Héroe</div>

          <div className="alert alert-danger">
            No se encontró a <b className="pB">héroe</b>
          </div>

          {/* <HeroCard {..hero} /> */}
        </div>
      </div>
    </>
  );
};
