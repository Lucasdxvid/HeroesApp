import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth";

export const Navbar = () => {
  //! Accedemos a nuestro GLOBAL CONTEXT y traemos la propiedad del user que posee el usuario / booleano
  const { user, logout } = useContext(AuthContext);

  //! Custom hook propio de reactRouter - (custom porque no es de react) para ayudarnos con la navegacion
  //Navigation.provider (posee funciones como volver atras, crear nueva pantalla en historial, etc.)
  const navigate = useNavigate();

  const onLogout = () => {
    logout(); // llamamos la funcion logout para que la accion de borrar user suceda
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
            {user?.name}
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
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Asociaciones
                </a>
                <ul className="dropdown-menu">
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link  ${isActive ? "active" : ""}`
                    }
                    to="/marvel"
                  >
                    Marvel
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link  ${isActive ? "active" : ""}`
                    }
                    to="/dc"
                  >
                    DC
                  </NavLink>
                </ul>
              </li>
              <li className="nav-item"></li>
              <li className="nav-item">
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
