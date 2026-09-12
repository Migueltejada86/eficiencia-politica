import { Link, useParams } from "react-router-dom";
import ciudades from "../../data/ciudades.json";

export default function Ciudad() {
  const { ciudadId } = useParams();
  const j = ciudades.jurisdicciones.find((x) => x.id === ciudadId);
  if (!j) {
    return (<main><p>Esa ciudad no está en el catálogo.</p><Link to="/">Volver</Link></main>);
  }
  const esAG = j.id === "alta-gracia";
  return (
    <main>
      <p className="meta"><Link to="/">Todas las ciudades</Link></p>
      <h1>{j.nombre}</h1>
      <p className="lead">{j.cuerpo}{j.bancas ? ` · ${j.bancas} bancas` : ""}</p>
      <p>{j.notas}</p>
      {esAG ? (
        <p>
          <Link to="/alta-gracia/funcionarios">Funcionarios</Link>
          {" · "}
          <Link to="/alta-gracia/mapa">Mapa</Link>
          {" · "}
          <Link to="/alta-gracia/reclamos">Reclamos</Link>
          {" · "}
          <Link to="/alta-gracia/pedido">Pedido A4</Link>
        </p>
      ) : (
        <p className="aviso">
          Fichas de {j.nombre} van en data/{j.id}/. Mientras tanto:{" "}
          <Link to="/tema/transporte-plataformas">transporte por app</Link>.
        </p>
      )}
    </main>
  );
}
