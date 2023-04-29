//! Utiliza el AuthContext y sirve para proveer la info a toda nuestra app
import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer"; //* Usamos el reducer que creamos como plantilla - parametro del useReducer
import { types } from "../types/types";

//! Estado inicial 
//? Lo comentamos porque ahora el INIT se encarga de almacenar esas propiedades por lo que en vez de colocar initialState colocamos un objeto vacio {} en el useReducer
// const initialState = {
//   logged: false,
// }; 

//! Inicializador (3er argumento) - lo usamos para almacenar la info del user
const init = () => {
  const user = JSON.parse(localStorage.getItem("user")); // Si regresa null no regresa nada pero si regresa, nos da el user
  return {
    //* Siempre tiene que retornar algo el INIT (como el estado inicial)
    logged: !!user, // Si el user existe !! entonces que almacene el usuario (!! convierte un booleano)
    user: user,
  };
};

//Recibe hijos (componentes hijos) - high order component
export const AuthProvider = ({ children }) => {
  //! useReducer para controlar varios estados de la info que proveemos - usamos el reducer que creamos como plantilla
  // Desestructuramos el state (cualquier nombre y el dispatch) y recibe el reducer, initialState
  const [authState, dispatch] = useReducer(authReducer, {}, init); //? Usaremos el 3er posible argumento el cual es el INIT (inicializador) para almacenar la info del login con localStorage

  const login = (name = "") => {
    const user = { id: "Dual", name }; // definimos el usuario

    const action = {
      type: types.login, // Extraemos los types de nuestro js del login y logout
      payload: user, // la info adicional es el user
    };

    localStorage.setItem("user", JSON.stringify(user)); //? colocamos key/clave "user" y segundo el valor en string (el user de objeto a string)

    dispatch(action); // despachamos la accion que recibimos de arriba
  };

  //! Proveemos el login y ademas el estado del useReducer, is lo desestructuramos es mas facil de manejar visualmente (no tenemos el objeto, directamente las props asi)
  return (
    <AuthContext.Provider value={{ ...authState, login: login }}>
      {children}
    </AuthContext.Provider>
  );
};
