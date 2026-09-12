import { useMemo, useState } from "react";
import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import data from "../../data/pines.json";

const TIPOS = Object.keys(data.tipos);

export default function Mapa() {
  const [on, setOn] = useState(() => Object.fromEntries(TIPOS.map((t) => [t, true])));
  const pines = useMemo(
    () => data.pines.filter((p) => on[p.tipo]),
    [on]
  );

  return (
    <main>
      <h1>Mapa</h1>
      <p className="lead">
        Reclamo, obra pedida, obra en curso, zona de riesgo. No es Guiacba
        (radares) ni el dashboard de incendios.
      </p>
      <div className="filters">
        {TIPOS.map((t) => (
          <button
            key={t}
            className={on[t] ? "on" : ""}
            onClick={() => setOn((s) => ({ ...s, [t]: !s[t] }))}
          >
            <span className="dot" style={{ background: data.tipos[t].color }} />
            {data.tipos[t].label}
          </button>
        ))}
      </div>
      <div className="map-wrap">
        <MapContainer center={data.centro} zoom={data.zoom} style={{ height: "100%", width: "100%" }}>
          <TileLayer attribution="&copy; OpenStreetMap" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {pines.map((p) => (
            <CircleMarker
              key={p.id}
              center={[p.lat, p.lng]}
              radius={10}
              pathOptions={{
                color: data.tipos[p.tipo].color,
                fillColor: data.tipos[p.tipo].color,
                fillOpacity: 0.85,
              }}
            >
              <Popup>
                <strong>{p.titulo}</strong>
                <br />
                {data.tipos[p.tipo].label} · {p.barrio} · {p.estado}
                <br />
                {p.nota}
              </Popup>
            </CircleMarker>
          ))}
        </MapContainer>
      </div>
    </main>
  );
}
