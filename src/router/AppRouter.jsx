import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth";
import { HeroesRoutes } from "../heroes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        
        {/* Ruta Publica */}
        <Route path="login" element={<PublicRoute> <LoginPage /> </PublicRoute>} />

        {/* Ruta Privada */}
        <Route path="/*" element={<PrivateRoute> <HeroesRoutes /> </PrivateRoute>} />

      </Routes>
    </>
  );
};
