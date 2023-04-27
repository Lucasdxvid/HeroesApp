import { heroes } from "../data/heroes";

export const getHeroesByName = (name = "") => {
  name = name.toLowerCase().trim(); // evitamos espacios y mayusculas
  //! Obtener nombres en el search
  if (name.length === 0) return []; // Si el usuario no coloca nada, nos dara un arreglo vacio (tambien podemos regresar arreglos de heroes randoms)

  //! Filtrado de heroes acorde al "NAME" que otorgamos - includes (devuelve true si coincide nombre que busca)
  return heroes.filter((hero) => hero.superhero.toLowerCase().includes(name)); // Si esto incluye (includes) el name que la persona escribe, regrasara el filter y si no nos devuelve el array vacio de arriba
};
