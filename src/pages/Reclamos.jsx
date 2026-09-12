import { useEffect, useState } from "react";
import seed from "../../data/reclamos.json";

const KEY = "ep-reclamos-v1";

export default function Reclamos() {
  const [lista, setLista] = useState(seed.reclamos);
  const [form, setForm] = useState({
    titulo: "",
    barrio: "",
    tipo: "reclamo",
    detalle: "",
  });

  useEffect(() => {
    const raw = localStorage.getItem(KEY);
    if (raw) setLista(JSON.parse(raw));
  }, []);

  function guardar(e) {
    e.preventDefault();
    if (!form.titulo.trim()) return;
    const item = {
      id: "r-" + Date.now(),
      ...form,
      estado: "abierto",
      fecha: new Date().toISOString().slice(0, 10),
    };
    const next = [item, ...lista];
    setLista(next);
    localStorage.setItem(KEY, JSON.stringify(next));
    setForm({ titulo: "", barrio: "", tipo: "reclamo", detalle: "" });
  }

  return (
    <main>
      <h1>Reclamos</h1>
      <p className="lead">
        V1 local: queda en este navegador. Después se pasa a planilla o
        Supabase. No uses esto para doxxing ni causas judiciales.
      </p>
      <form className="reclamo" onSubmit={guardar}>
        <label>
          Título
          <input value={form.titulo} onChange={(e) => setForm({ ...form, titulo: e.target.value })} />
        </label>
        <label>
          Barrio
          <input value={form.barrio} onChange={(e) => setForm({ ...form, barrio: e.target.value })} />
        </label>
        <label>
          Tipo
          <select value={form.tipo} onChange={(e) => setForm({ ...form, tipo: e.target.value })}>
            <option value="reclamo">Reclamo</option>
            <option value="obra_pedida">Obra pedida</option>
            <option value="zona_riesgo">Zona de riesgo</option>
          </select>
        </label>
        <label>
          Detalle
          <textarea rows={4} value={form.detalle} onChange={(e) => setForm({ ...form, detalle: e.target.value })} />
        </label>
        <button className="submit" type="submit">Guardar reclamo</button>
      </form>
      <h2>Listado</h2>
      <div className="grid">
        {lista.map((r) => (
          <div className="card" key={r.id}>
            <h3>{r.titulo}</h3>
            <div className="meta">
              {r.tipo} · {r.barrio || "sin barrio"} · {r.estado}
            </div>
            <div className="meta">{r.fecha}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
