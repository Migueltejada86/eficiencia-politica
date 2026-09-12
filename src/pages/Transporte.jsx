import { Link } from "react-router-dom";
import t from "../../data/temas/transporte-plataformas.json";

export default function Transporte() {
  return (
    <main>
      <p className="meta"><Link to="/">Inicio</Link></p>
      <h1>{t.titulo}</h1>
      <p className="lead">{t.que_es}</p>
      <p className="aviso">{t.fuera}</p>
      <h2>Córdoba Capital</h2>
      <div className="card">
        <p><strong>{t.capital.norma}</strong> — {t.capital.sancion}. {t.capital.reglamentacion}.</p>
        <p>{t.capital.figura}</p>
        <ul>{t.capital.requisitos_clave.map((r) => <li key={r}>{r}</li>)}</ul>
        <p className="meta">Multas UEM: conductor {t.capital.multas_uem.conductor} · dueño {t.capital.multas_uem.propietario} · empresa {t.capital.multas_uem.empresa}</p>
      </div>
      <h2>Provincia</h2>
      <ul>{t.provincia.que_medir.map((r) => <li key={r}>{r}</li>)}</ul>
      <h2>Alta Gracia</h2>
      <ul>{t.alta_gracia.que_medir.map((r) => <li key={r}>{r}</li>)}</ul>
    </main>
  );
}
