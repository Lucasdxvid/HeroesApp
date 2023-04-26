import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../components";

export const SearchPage = () => {
  //! Custom Hook para cambiar la queryParam (ReactRouterDom) / useLocation para
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  //! Mantener el valor - useForm (nuestro customHook)
  const { searchText, onInputChange } = useForm({
    searchText: "",
  });

  //! Prevent Default + formateo del texto en search
  const onSearchSubtmit = (e) => {
    e.preventDefault();
    if (searchText.trim().length <= 1) return; //quitamos espacios y si es menor a 1 no devolvemos nada
    navigate(`?q=${searchText}`); //Definimos la ruta acorde al valor de nuestro search
    console.log({ searchText });
  };

  return (
    <>
      <h1>Busqueda de héroes</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Busquedas</h4>
          <hr />
          <form onSubmit={onSearchSubtmit}>
            <input
              type="text"
              placeholder="Busca tu héroe favorito"
              name="searchText"
              autoComplete="off"
              className="form-control"
              value={searchText}
              onChange={onInputChange}
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
            No se encontró a <b className="pB">{q}</b>
          </div>

          {/* <HeroCard {..hero} /> */}
        </div>
      </div>
    </>
  );
};
