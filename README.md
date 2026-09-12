# Eficiencia Política

Observatorio ciudadano de **Alta Gracia** (Córdoba).

- Sitio previsto: `https://eficiencia-politica.com.ar`
- Repo: `https://github.com/Migueltejada86/eficiencia-politica`
- Stream (otro canal): *Anti buena onda* — @elmigue.tt / @malvado_migue

La web mide. El programa es ácido. No mezclar marcas en el header ni en el pedido al Concejo.

## Qué hay en V1

| Ruta | Contenido |
|---|---|
| `/` | Home + 3 números (empiezan en —) |
| `/funcionarios` | Intendente + 9 concejales 2023–2027 |
| `/mapa` | Pines Leaflet (4 tipos) |
| `/reclamos` | Formulario (localStorage) |
| `/pedido` | Resumen del escrito A4 |

Datos en `/data`. Pedido completo en `docs/pedido-acceso-informacion.md`.

## Correr

```bash
npm install
npm run dev
```

Build: `npm run build`. Deploy: Vercel, raíz de este repo.

## Fuera de este repo

Guiacba / Panchoradar, Kores incendio (dashboard), bots, landing de barbería, el stream.

## Fuente

Nombres de funcionarios: fuentes públicas. Actualizar suplencias contra https://concejodeliberanteag.gob.ar/
