import { Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Catalog from "./pages/Catalog/Catalog";
import Favorites from "./pages/Favorites/Favorites";
import { StyledNav } from "./App.styled";

function App() {
  return (
    <div>
      <StyledNav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/catalog">Cars</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
      </StyledNav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
