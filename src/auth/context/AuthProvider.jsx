//! Utiliza el AuthContext y sirve para proveer la info a toda nuestra app
import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer"; //* Usamos el reducer que creamos como plantilla - parametro del useReducer
import { types } from "../types/types";

//! Estado inicial
const initialState = {
  logged: false,
};

//Recibe hijos (componentes hijos) - high order component
export const AuthProvider = ({ children }) => {
  //! useReducer para controlar varios estados de la info que proveemos - usamos el reducer que creamos como plantilla
  // Desestructuramos el state (cualquier nombre y el dispatch) y recibe el reducer, initialState
  const [authState, dispatch] = useReducer(authReducer, initialState);

  const login = (name = "") => {
    const action = {
      type: types.login, // Extraemos los types de nuestro js del login y logout
      payload: {
        id: "dual",
        name: name,
      },
    };

    dispatch(action); // despachamos la accion que recibimos de arriba
  };

  //! Proveemos el login y ademas el estado del useReducer, is lo desestructuramos es mas facil de manejar visualmente (no tenemos el objeto, directamente las props asi)
  return (
    <AuthContext.Provider value={{ ...authState, login: login }}>
      {children}
    </AuthContext.Provider>
  );
};
