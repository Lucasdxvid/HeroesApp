import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers/getHeroById";

export const HeroPage = () => {
  //! Custom hook de ReactRouterDom - Sirve para obtener los parametros / lo desestrucutramos porque sabemos que dentro posee el id de la card
  const { heroId } = useParams();

  //! Hook useMemo para memorizar las cards usando la id de dependencia (solo cuando la id cambia se dispara la funcion callback que nos trae los heroes) - El valor se mantiene igual porque es la misma id si algo del padre cambiaria
  const hero = useMemo(() => getHeroById(heroId), [heroId]);

  //! Boton para retroceder - customHook ReactRouterDom
  const navigate = useNavigate();

  const onNavigateBack = () => {
    navigate(-1); // Nos lleva a la pagina-historial anterior
  };

  //! Si la URL (argumentos-segmentos) / Heroe no existe, redireccionamos
  if (!hero) {
    return <Navigate to={"/marvel"} />;
  }

  //! ID = ID.JPG
  const heroImageUrl = `/public/heroes/${hero.id}.jpg`;

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={heroImageUrl}
          alt={hero.superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>

      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <hr />
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b className="pB">Alter ego:</b>
            {" " + hero.alter_ego}
          </li>
          <li className="list-group-item">
            <b className="pB">Publisher:</b>
            {" " + hero.publisher}
          </li>
          <li className="list-group-item">
            <b className="pB">First appereance:</b>
            {" " + hero.first_appearance}
          </li>
        </ul>
        <hr />
        <h5 className="mt-3">Characters</h5>
        <small>{hero.characters}</small>
        <div className="d-flex flex-column align-items-start mt-2">
          <button
            className="btn btn-light btn-outline-danger"
            onClick={onNavigateBack}
          >
            Volver atrás
          </button>
        </div>
      </div>
    </div>
  );
};
