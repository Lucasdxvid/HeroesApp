import { useContext } from "react";
import { AuthContext } from "../auth";
import { Navigate } from "react-router-dom";

//! Nuestra ruta publica es un high order component por lo que recibe childrens
export const PublicRoute = ({ children }) => {
  const { logged } = useContext(AuthContext); // Usaremos el useContext ya que ahi tenemos el valor que nos permite saber si el usuario esta logeado (el logged)

  //! Condicional contraria a la de la ruta privada (inverso)
  return !logged ? children : <Navigate to={"/marvel"} />;
};
