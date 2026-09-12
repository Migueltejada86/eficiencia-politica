import { NavLink, Route, Routes } from "react-router-dom";
import Hub from "./pages/Hub.jsx";
import Ciudad from "./pages/Ciudad.jsx";
import Transporte from "./pages/Transporte.jsx";
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
          <small>Córdoba · ciudades + provincia</small>
        </NavLink>
        <nav>
          <NavLink to="/alta-gracia">Alta Gracia</NavLink>
          <NavLink to="/cordoba-capital">Capital</NavLink>
          <NavLink to="/cordoba-provincia">Provincia</NavLink>
          <NavLink to="/tema/transporte-plataformas">Apps / Uber</NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Hub />} />
        <Route path="/tema/transporte-plataformas" element={<Transporte />} />
        <Route path="/alta-gracia/funcionarios" element={<Funcionarios />} />
        <Route path="/alta-gracia/funcionarios/:id" element={<Ficha />} />
        <Route path="/alta-gracia/mapa" element={<Mapa />} />
        <Route path="/alta-gracia/reclamos" element={<Reclamos />} />
        <Route path="/alta-gracia/pedido" element={<Pedido />} />
        <Route path="/funcionarios" element={<Funcionarios />} />
        <Route path="/funcionarios/:id" element={<Ficha />} />
        <Route path="/mapa" element={<Mapa />} />
        <Route path="/reclamos" element={<Reclamos />} />
        <Route path="/pedido" element={<Pedido />} />
        <Route path="/inicio-ag" element={<Home />} />
        <Route path="/:ciudadId" element={<Ciudad />} />
      </Routes>
      <footer>
        Proyecto independiente. Stream: <em>Anti buena onda</em> · @elmigue.tt
      </footer>
    </>
  );
}
