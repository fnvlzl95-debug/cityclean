/* Dynamic subway line. Given the measured centre of every station (in the
   board's own 1055-wide coordinate space), it draws ONE continuous route
   that connects them in order with subway-style right-angle turns (rounded
   corners), coloured per line segment. Because the geometry is derived from
   where the stations actually render, the line and dots always line up. */

export type MetroStation = {
  no: number;
  color: string;
  x: number;
  y: number;
};

type Pt = { x: number; y: number };

const CORNER = 28;

// Subway-style routing between two stations. Same row -> straight line.
// Different rows -> a Z: drop out of the row, traverse horizontally in the
// gap BETWEEN the rows (so it never overlaps a row of content), drop in.
function elbow(a: Pt, b: Pt): string {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const adx = Math.abs(dx);
  const ady = Math.abs(dy);
  if (adx < 5 || ady < 5) {
    return `M${a.x} ${a.y}L${b.x} ${b.y}`;
  }
  const midY = (a.y + b.y) / 2;
  const sx = Math.sign(dx);
  const sy = Math.sign(dy);
  const r = Math.min(CORNER, adx / 2, ady / 4);
  return (
    `M${a.x} ${a.y}` +
    `V${midY - sy * r}` +
    `Q${a.x} ${midY} ${a.x + sx * r} ${midY}` +
    `H${b.x - sx * r}` +
    `Q${b.x} ${midY} ${b.x} ${midY + sy * r}` +
    `V${b.y}`
  );
}

export function MetroRoute({
  stations,
  width,
  height,
}: {
  stations: MetroStation[];
  width: number;
  height: number;
}) {
  if (stations.length < 2 || height < 1) {
    return null;
  }

  const segments = stations.slice(0, -1).map((a, i) => {
    const b = stations[i + 1];
    return { d: elbow(a, b), color: b.color, key: `${a.no}-${b.no}` };
  });

  return (
    <svg
      aria-hidden="true"
      className="metro-route-layer"
      preserveAspectRatio="none"
      viewBox={`0 0 ${width} ${height}`}
    >
      <g className="metro-route__shadow">
        {segments.map((s) => (
          <path d={s.d} key={`s-${s.key}`} />
        ))}
      </g>
      <g className="metro-route__lines">
        {segments.map((s) => (
          <path d={s.d} key={`l-${s.key}`} stroke={s.color} />
        ))}
      </g>
      <g className="metro-route__dots">
        {stations.map((st) => (
          <circle cx={st.x} cy={st.y} fill={st.color} key={`d-${st.no}`} r={7} />
        ))}
      </g>
    </svg>
  );
}
