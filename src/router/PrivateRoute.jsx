import { useContext } from "react";
import { AuthContext } from "../auth";
import { Navigate } from "react-router-dom";

//! Nuestra ruta privida es un high order component por lo que recibe childrens
export const PrivateRoute = ({ children }) => {
  const { logged } = useContext(AuthContext); // Usaremos el useContext ya que ahi tenemos el valor que nos permite saber si el usuario esta logeado (el logged)

  //! Condicional de "Si esta logeado lo enviamos al children y si no a la ruta login"
  return logged ? children : <Navigate to={"/login"} />;
};
