import { types } from "../types/types";

//! Reducer para controlar muchos estados, recibe estado y acciones (Sirve como plantilla para el useReducer)
export const authReducer = (state = {}, action) => {
  // Nuestras acciones tienen un type y usualmente un payload
  // Aqui basicamente hacemos una accion determinada si recibimos una tipo logout, regresamos el estado del mismo, etc.
  switch (action.type) {
    case types.login: //* Los TYPES los traemos del archivo js que creamos antes
      return {
        ...state, //* Es util desestructurar el estado porque si el dia de mañana tenemos mas propiedades ya las tenemos disponibles
        logged: true, //? En el caso de que logeemos el usuario sera true, (accion principal mientras que payload info adicional)
        user: action.payload, //? El nombre sera igual al payload (información adicional que se envía junto con una acción a través del dispatch del reduce)
      };
      break;
    case types.logout:
      return {
        logged: false, //* Aqui no colocamos el NAME porque no existe cuando no estamos logeados o podemos poner name: null
        name: null,
      };
      break;
    default:
      return state;
      break;
  }
};
