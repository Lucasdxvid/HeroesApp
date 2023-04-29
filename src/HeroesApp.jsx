import { AuthProvider } from "./auth";
import { AppRouter } from "./router/AppRouter";

export const HeroesApp = () => {
  //!AuthProvider nos permite compartir la info de contexto global en los hijos de cualquier MODULO (auth, heroe, etc.)
  //* Es decir que tenemos acceso a toda la informacion que nuestro PROVIDER regresa, en cualquier componente
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};
