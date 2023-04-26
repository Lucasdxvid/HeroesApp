import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui";
import { DcPage, MarvelPage, HeroPage, SearchPage } from "../pages";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          {/* Pages */}
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DcPage />} />

          {/* Pages Functions */}
          <Route path="search" element={<SearchPage />} />
          {/*! :id hace referencia a la ruta de la card especifica del heroe */}
          <Route path="hero/:heroId" element={<HeroPage />} />

          {/* Default Route */}
          <Route path="/*" element={<Navigate to="marvel" />} />
        </Routes>
      </div>
    </>
  );
};
