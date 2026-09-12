import { Link, useParams } from "react-router-dom";
import data from "../../data/funcionarios.json";

export default function Ficha() {
  const { id } = useParams();
  const persona =
    data.ejecutivo.id === id
      ? data.ejecutivo
      : data.concejales.find((c) => c.id === id);

  if (!persona) {
    return (
      <main>
        <p>No está en la nómina base.</p>
        <Link to="/funcionarios">Volver</Link>
      </main>
    );
  }

  return (
    <main>
      <p className="meta">
        <Link to="/funcionarios">Funcionarios</Link>
      </p>
      <h1>{persona.nombre}</h1>
      <p className="lead">
        {persona.cargo}
        <br />
        {persona.bloque}
      </p>
      <div className="nums">
        <div className="num">
          <b>{persona.asistencia_pct ?? "\u2014"}</b>
          <span>asistencia</span>
        </div>
        <div className="num">
          <b>{persona.proyectos_presentados ?? "\u2014"}</b>
          <span>presentados</span>
        </div>
        <div className="num">
          <b>{persona.proyectos_aprobados ?? "\u2014"}</b>
          <span>aprobados</span>
        </div>
      </div>
      <p className="aviso">
        Dieta y asesores no se publican hasta que responda el pedido de
        acceso. Comisiones:{" "}
        {persona.comisiones && persona.comisiones.length
          ? persona.comisiones.join(", ")
          : "sin cargar"}
        .
      </p>
    </main>
  );
}
