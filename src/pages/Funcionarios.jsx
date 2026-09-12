import { Link } from "react-router-dom";
import data from "../../data/funcionarios.json";

export default function Funcionarios() {
  const todos = [
    { ...data.ejecutivo, esIntendente: true },
    ...data.concejales,
  ];
  return (
    <main>
      <h1>Funcionarios</h1>
      <p className="lead">
        Período {data.periodo}. Presidente del HCD: {data.autoridades_hcd.presidente}.
      </p>
      <div className="grid">
        {todos.map((p) => (
          <Link key={p.id} className="card" to={`/funcionarios/${p.id}`}>
            <h3>{p.nombre}</h3>
            <div className="meta">{p.cargo}</div>
            <div className="meta">{p.bloque}</div>
            <div className="meta">
              Asistencia {p.asistencia_pct ?? "\u2014"} · Proyectos{" "}
              {p.proyectos_presentados ?? "\u2014"}/{p.proyectos_aprobados ?? "\u2014"}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
