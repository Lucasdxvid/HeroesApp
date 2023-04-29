//! Utiliza el AuthContext y sirve para proveer la info a toda nuestra app
import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer"; //* Usamos el reducer que creamos como plantilla - parametro del useReducer

//! Estado inicial
const initialState = {
  logged: false,
};

//! useReducer para controlar varios estados de la info que proveemos - usamos el reducer que creamos como plantilla
// Desestructuramos el state (cualquier nombre y el dispatch) y recibe el reducer, initialState
useReducer[(authState, dispatch)] = (authReducer, initialState);

//Recibe hijos (componentes hijos) - high order component
export const AuthProvider = ({ children }) => {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
