import { Link } from "react-router-dom";

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  //! ID = ID.JPG
  const heroImageUrl = `/assets/heroes/${id}.jpg`;
  //! Evitar repetir "Alter Ego"
  const charactersByActor = <p className="card-text pB">{characters}</p>;

  return (
    <div className="col">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img src={heroImageUrl} alt={superhero} className="card-img" />
          </div>

          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title pB">{superhero}</h5>
              <div className="card-text pB">{alter_ego}</div>
              {alter_ego != characters && charactersByActor}
              <p className="card-text pB">
                <small className="text-muted pB">{first_appearance}</small>
              </p>

              <Link to={`/hero/${id}`}>Más info...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
