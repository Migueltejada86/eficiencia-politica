import { Link } from "react-router-dom";
import ciudades from "../../data/ciudades.json";

export default function Hub() {
  return (
    <main>
      <h1>Eficiencia Política</h1>
      <p className="lead">
        Observatorio por ciudad y por provincia. Primero Córdoba.
        El stream es Anti buena onda; esta web solo publica datos.
      </p>
      <div className="grid">
        {ciudades.jurisdicciones.map((j) => (
          <Link key={j.id} className="card" to={`/${j.id}`}>
            <h3>{j.nombre}</h3>
            <div className="meta">{j.nivel} · {j.cuerpo}</div>
            <div className="meta">{j.notas}</div>
          </Link>
        ))}
      </div>
      <p style={{ marginTop: "1.5rem" }}>
        <Link to="/tema/transporte-plataformas">Tema: transporte por app / cacería de Uber</Link>
      </p>
      <p className="aviso">
        Próximas ciudades: {ciudades.proximas.join(", ")}. Se agregan como carpeta de datos.
      </p>
    </main>
  );
}
