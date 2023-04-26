import { heroes } from "../data/heroes";

export const getHeroById = (id) => {
  //! Nos devuelve el primer elemento que cumpla con la condicion (misma id)
  return heroes.find((hero) => hero.id === id);
};
