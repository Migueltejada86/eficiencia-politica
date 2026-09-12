export default function Pedido() {
  return (
    <main>
      <h1>Pedido A4</h1>
      <p className="lead">
        Texto listo para imprimir o pegar. Firmar como Eficiencia Política,
        no como Anti buena onda. Archivo completo en{" "}
        <code>docs/pedido-acceso-informacion.md</code>.
      </p>
      <div className="card">
        <p>
          Al Honorable Concejo Deliberante de Alta Gracia, Av. Belgrano 15.
        </p>
        <p>
          Solicito acceso a información pública (Ley 27.275 y normas
          locales) para publicar fichas y un mapa de reclamos y obras:
        </p>
        <ol>
          <li>Nómina, bloques, mails y comisiones.</li>
          <li>Actas 2024–2026.</li>
          <li>Asistencia por sesión.</li>
          <li>Expedientes: número, autor, título, comisión, estado.</li>
          <li>Votaciones nominales, si existen.</li>
          <li>Obras pedidas / en ejecución.</li>
          <li>Dietas y asesores, si se publican.</li>
        </ol>
        <p>Preferimos CSV o planilla, no solo PDF.</p>
      </div>
    </main>
  );
}
