import { Link, NavLink, useNavigate } from "react-router-dom";
export const Navbar = () => {
  //! Custom hook propio de reactRouter - (custom porque no es de react) para ayudarnos con la navegacion
  //Navigation.provider (posee funciones como volver atras, crear nueva pantalla en historial, etc.)
  const navigate = useNavigate();

  const onLogout = () => {
    navigate("/login", { replace: true }); //Replace evita volver a la pagina anterior (no guarda historial)
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light rounded-3">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            HeroesApp
          </Link>
          <span className="nav-item nav-link text-primary spanNav">
            Dual Athloner
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                  to="/"
                >
                  Asociaciones
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                  to="/marvel"
                >
                  Marvel
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                  to="/dc"
                >
                  DC
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                  to="/search"
                >
                  Buscar
                </NavLink>
              </li>
              <button
                className="nav-item nav-link btn btn-secondary text-danger btnLogout"
                onClick={onLogout}
              >
                Logout
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
