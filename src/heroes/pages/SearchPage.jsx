import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../components";
import { getHeroesByName } from "../helpers";

export const SearchPage = () => {
  //! Custom Hook para cambiar la queryParam (ReactRouterDom) / useLocation para
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  //! Helper para filtrar heroe acorde al "name"
  const heroes = getHeroesByName(q); // La Q es la query de arriba

  //! Mantener el valor - useForm (nuestro customHook)
  const { searchText, onInputChange } = useForm({
    searchText: q, // esto esta "" para que al recargar la pag se quede vacio pero si pones el mismo valor de q, entonces al recargar la pagina tendra el valor del query
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

          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} /> // desestructuramos el resto de elementos
          ))}
        </div>
      </div>
    </>
  );
};
