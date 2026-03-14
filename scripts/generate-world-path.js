/**
 * One-time script: fetch Natural Earth 110m land GeoJSON and output SVG path data.
 * Equirectangular: viewBox 0 0 360 180, x = lon+180, y = 90-lat
 * Simplified for a more abstract, aesthetic look (fewer points, smoother curves).
 * Run: node scripts/generate-world-path.js
 */
const https = require('https');

const SIMPLIFY_EVERY = 14; // keep every Nth point — higher = more abstract shapes
const ROUND = 1;         // decimal places (1 = slightly softer look)
const CORNER_ROUND = 0.26; // 0 = sharp, higher = more rounded (keep <0.3 for distinction)
const ANTARCTICA_LAT = -58; // exclude land south of this (Antarctica)

function isAntarcticaRing(coords) {
  return coords.every(([, lat]) => lat < ANTARCTICA_LAT)
}

function fetch(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (c) => (data += c));
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function simplifyRing(coords) {
  if (coords.length <= 4) return coords;
  const out = [coords[0]];
  for (let i = SIMPLIFY_EVERY; i < coords.length - 1; i += SIMPLIFY_EVERY) {
    out.push(coords[i]);
  }
  out.push(coords[coords.length - 1]);
  return out;
}

function fmt(x, y) {
  const X = Math.round(x * Math.pow(10, ROUND)) / Math.pow(10, ROUND);
  const Y = Math.round(y * Math.pow(10, ROUND)) / Math.pow(10, ROUND);
  return `${X.toFixed(ROUND)},${Y.toFixed(ROUND)}`;
}

function coordsToPath(coords) {
  const simplified = simplifyRing(coords);
  const pts = simplified.map(([lon, lat]) => {
    const x = (lon + 180);
    const y = (90 - lat);
    return [x, y];
  });
  const n = pts.length;
  if (n < 3) return 'M ' + pts.map(([x, y]) => fmt(x, y)).join(' L ') + ' Z';
  const t = CORNER_ROUND;
  const parts = [];
  for (let i = 0; i < n; i++) {
    const prev = pts[(i - 1 + n) % n];
    const curr = pts[i];
    const next = pts[(i + 1) % n];
    const inX = curr[0] - t * (curr[0] - prev[0]);
    const inY = curr[1] - t * (curr[1] - prev[1]);
    const outX = curr[0] + t * (next[0] - curr[0]);
    const outY = curr[1] + t * (next[1] - curr[1]);
    if (i === 0) {
      parts.push('M ' + fmt(inX, inY));
    }
    parts.push('Q ' + fmt(curr[0], curr[1]) + ' ' + fmt(outX, outY));
  }
  return parts.join(' ') + ' Z';
}

function geomToPaths(geom) {
  const include = (ring) => !isAntarcticaRing(ring);
  if (geom.type === 'Polygon') {
    return geom.coordinates.filter(include).map(ring => coordsToPath(ring));
  }
  if (geom.type === 'MultiPolygon') {
    return geom.coordinates.flatMap(poly =>
      poly.filter(include).map(ring => coordsToPath(ring))
    );
  }
  return [];
}

async function main() {
  const url = 'https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_land.geojson';
  const data = await fetch(url);
  const geojson = JSON.parse(data);
  const allPaths = [];
  for (const f of geojson.features) {
    allPaths.push(...geomToPaths(f.geometry));
  }
  const pathString = allPaths.join(' ');
  const out = `/**
 * Natural Earth 110m land — simplified, Antarctica excluded.
 * Equirectangular viewBox 0 0 360 180. Generated from Natural Earth Data.
 */
export const LAND_PATH = \`${pathString}\`;
`;
  const fs = require('fs');
  const path = require('path');
  fs.writeFileSync(path.join(__dirname, '../data/worldContinents.ts'), out);
  console.log('Wrote data/worldContinents.ts with', allPaths.length, 'path segments');
}

main().catch(console.error);
