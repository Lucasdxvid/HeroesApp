import { useContext } from "react";
import { AuthContext } from "../auth";
import { Navigate, useLocation } from "react-router-dom";

//! Nuestra ruta privida es un high order component por lo que recibe childrens
export const PrivateRoute = ({ children }) => {
  const { logged } = useContext(AuthContext); // Usaremos el useContext ya que ahi tenemos el valor que nos permite saber si el usuario esta logeado (el logged)

  //! Recordar ultima ruta al hacer logout y luego login (al usar el hook de RRD useLocation)
  const { pathname, search } = useLocation(); // Al hacer console log vemos que el mismo tiene el search (query parameter), pathname, key, etc.

  const lastPath = pathname + search; //Concatenamos el pathname con su search /search + ?q=batman por ejemplo
  localStorage.setItem("lastPath", lastPath); //Memorizamos el mismo poniendole un nombre y el valor

  //! Condicional de "Si esta logeado lo enviamos al children y si no a la ruta login"
  return logged ? children : <Navigate to={"/login"} />;
};
