import { Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Cars from "./pages/Cars/Cars";
import Favorites from "./pages/Favorites/Favorites";

function App() {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/cars">Cars</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
