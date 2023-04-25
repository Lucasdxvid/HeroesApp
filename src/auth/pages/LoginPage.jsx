import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();

  const onLogin = () => {
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
