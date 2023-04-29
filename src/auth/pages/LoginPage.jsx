import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context";

export const LoginPage = () => {
  //! Accedemos a nuestro GLOBAL CONTEXT y traemos la propiedad del LOGIN que posee el usuario / booleano
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const onLogin = () => {
    login("Dual Athloner"); //* El login del contexto global nos pedia un nombre
    navigate("marvel", { replace: true }); // la persona no puede volver al login, no guarda el historial al usar el back
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
