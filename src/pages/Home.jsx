import { Link } from "react-router-dom";
import data from "../../data/funcionarios.json";

function dash(v) {
  return v === null || v === undefined ? "\u2014" : v;
}

export default function Home() {
  const n = data.concejales.length;
  return (
    <main>
      <h1>Alta Gracia, en datos</h1>
      <p className="lead">
        Quién está en el Concejo, qué se pide en la calle y si eso aparece
        como expediente u obra. Sin sueldos inventados y sin el tono del
        stream.
      </p>
      <div className="nums">
        <div className="num">
          <b>{n}</b>
          <span>concejales (más el intendente)</span>
        </div>
        <div className="num">
          <b>{dash(null)}</b>
          <span>asistencia promedio</span>
        </div>
        <div className="num">
          <b>{dash(null)}</b>
          <span>proyectos con estado cargado</span>
        </div>
      </div>
      <p className="aviso">
        Los tres números se completan cuando entren las actas del pedido A4.
        Mientras tanto las fichas tienen nombre y bloque.
      </p>
      <p>
        <Link to="/funcionarios">Ver funcionarios</Link>
        {" · "}
        <Link to="/mapa">Abrir mapa</Link>
        {" · "}
        <Link to="/reclamos">Cargar un reclamo</Link>
      </p>
    </main>
  );
}
