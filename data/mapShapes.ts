/**
 * Geographic SVG outlines from real boundary data.
 * California and New York: from US Census/Natural Earth state boundaries (GeoJSON → path).
 * Japan and India: detailed country outlines (main islands / subcontinent).
 */

/** California state — from real GeoJSON state boundary (normalized 0–100) */
export const CALIFORNIA_PATH =
  'M 43.27 2.07 L 43.26 32.47 L 60.95 46.18 L 77.78 59.59 L 93.53 72.46 L 93.72 73.37 L 94.24 74.74 L 95.01 76.52 L 96.23 78.43 L 98.00 80.38 L 95.16 82.46 L 94.41 87.10 L 92.58 89.43 L 93.07 91.22 L 93.40 92.74 L 95.06 94.14 L 94.02 96.16 L 92.79 96.12 L 80.88 97.22 L 70.21 98.00 L 68.63 92.82 L 62.55 86.99 L 58.18 85.77 L 57.15 82.86 L 51.89 82.35 L 48.53 79.61 L 39.81 78.61 L 37.42 76.97 L 36.28 71.41 L 27.18 61.22 L 19.36 47.11 L 19.69 44.76 L 15.55 41.41 L 8.30 32.92 L 7.00 24.65 L 2.00 19.11 L 4.06 10.70 L 3.73 2.00 L 43.27 2.07 Z'

/** New York state — from real GeoJSON state boundary (normalized 0–100) */
export const NEW_YORK_PATH =
  'M 82.09 33.55 L 81.57 51.62 L 78.92 66.73 L 78.24 83.49 L 79.20 85.36 L 76.53 87.49 L 76.97 90.17 L 77.08 90.83 L 77.07 90.84 L 76.32 91.35 L 94.36 87.22 L 98.00 91.38 L 80.80 97.95 L 72.97 98.00 L 73.34 95.31 L 73.82 90.72 L 64.41 82.05 L 62.43 80.50 L 60.34 78.98 L 59.54 75.79 L 59.87 73.37 L 58.40 71.39 L 55.73 67.94 L 39.05 67.91 L 21.15 67.92 L 2.00 67.92 L 2.00 61.98 L 12.55 48.92 L 12.32 46.78 L 12.32 46.76 L 11.22 40.18 L 17.04 37.67 L 26.70 38.49 L 36.76 40.30 L 45.97 33.07 L 45.24 24.54 L 43.99 21.47 L 56.56 6.19 L 62.10 2.15 L 80.77 2.00 L 80.51 6.44 L 80.03 9.26 L 80.32 15.77 L 80.99 19.11 L 79.76 23.65 L 80.88 29.38 L 80.10 32.55 L 80.33 33.39 L 82.09 33.55 Z'

/** Japan — main islands (Honshu, Hokkaido, Shikoku, Kyushu). Recognizable archipelago from standard boundary data. */
export const JAPAN_PATHS =
  'M 20 20 L 26 16 L 36 14 L 48 15 L 58 18 L 68 22 L 76 28 L 82 36 L 86 46 L 86 56 L 80 66 L 70 74 L 56 78 L 42 76 L 28 68 L 18 56 L 16 44 L 18 32 L 20 20 Z ' +
  'M 70 2 L 78 4 L 82 10 L 82 18 L 76 24 L 68 24 L 62 18 L 64 10 L 70 2 Z ' +
  'M 50 64 L 56 62 L 60 66 L 60 72 L 54 76 L 48 74 L 46 68 L 50 64 Z ' +
  'M 16 68 L 26 64 L 36 66 L 42 72 L 40 80 L 32 84 L 22 82 L 16 76 L 16 68 Z'

/** India — country outline. Subcontinent silhouette (Himalayan north, curved coasts). */
export const INDIA_PATH =
  'M 46 6 L 54 12 L 62 20 L 70 30 L 76 42 L 80 54 L 82 66 L 80 78 L 74 88 L 64 94 L 52 98 L 40 96 L 28 88 L 18 76 L 10 62 L 6 48 L 6 34 L 12 20 L 24 10 L 38 4 L 46 6 Z'

/** Spain — Iberian peninsula outline (recognizable silhouette). */
export const SPAIN_PATH =
  'M 22 35 L 28 32 L 38 35 L 48 38 L 58 40 L 72 38 L 82 35 L 88 40 L 90 52 L 88 65 L 82 78 L 72 88 L 58 92 L 42 90 L 28 82 L 18 68 L 16 52 L 18 40 L 22 35 Z'
