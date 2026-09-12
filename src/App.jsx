import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Funcionarios from "./pages/Funcionarios.jsx";
import Ficha from "./pages/Ficha.jsx";
import Mapa from "./pages/Mapa.jsx";
import Reclamos from "./pages/Reclamos.jsx";
import Pedido from "./pages/Pedido.jsx";

export default function App() {
  return (
    <>
      <header className="app">
        <NavLink to="/" className="brand">
          Eficiencia Política
          <small>Alta Gracia · 2023–2027</small>
        </NavLink>
        <nav>
          <NavLink to="/funcionarios">Funcionarios</NavLink>
          <NavLink to="/mapa">Mapa</NavLink>
          <NavLink to="/reclamos">Reclamos</NavLink>
          <NavLink to="/pedido">Pedido A4</NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/funcionarios" element={<Funcionarios />} />
        <Route path="/funcionarios/:id" element={<Ficha />} />
        <Route path="/mapa" element={<Mapa />} />
        <Route path="/reclamos" element={<Reclamos />} />
        <Route path="/pedido" element={<Pedido />} />
      </Routes>
      <footer>
        Proyecto independiente de datos locales. No es un sitio municipal.
        El stream <em>Anti buena onda</em> es otro canal; acá solo se publican
        fichas y pines. Contacto: @elmigue.tt · @malvado_migue
      </footer>
    </>
  );
}
