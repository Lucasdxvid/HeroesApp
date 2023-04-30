import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context";

export const LoginPage = () => {
  //! Accedemos a nuestro GLOBAL CONTEXT y traemos la propiedad del LOGIN que posee el usuario / booleano
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const onLogin = () => {
    const lastPath = localStorage.getItem("lastPath") || "/"; // Condicional para que no guarde el last path en el login si es nulo

    login("Dual Athloner"); //* El login del contexto global nos pedia un nombre
    navigate(lastPath, { replace: true }); // la persona no puede volver al login, no guarda el historial al usar el back / ya no es marvel ahora es lastPath
  };
  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <button className="btn btn-light" onClick={onLogin}>
        Login
      </button>
    </div>
  );
};
