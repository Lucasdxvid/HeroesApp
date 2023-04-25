import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) => {
  //! Validacion de publisher
  const validPublishers = ["DC Comics", "Marvel Comics"];
  if (!validPublishers.includes(publisher)) {
    throw new Error(`${publisher} no es un publisher valido`);
  }
  //! Filtrado de publisher
  return heroes.filter((heroe) => heroe.publisher === publisher);
};
