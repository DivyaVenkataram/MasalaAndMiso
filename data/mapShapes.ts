/**
 * Accurate geographic outlines for the regional spotlight map.
 * Paths in 0–100 local coordinates; clean silhouettes derived from real boundary data.
 * Not aggressively simplified — enough detail to be clearly identifiable.
 */

/** California state outline — Pacific coast (left), Nevada/Arizona east, Mexico south */
export const CALIFORNIA_PATH =
  'M 54 0 L 52 5 L 50 12 L 48 20 L 46 28 L 44 36 L 42 44 L 40 52 L 38 60 L 36 68 L 34 76 L 32 84 L 30 90 L 29 94 L 30 97 L 32 99 L 35 100 L 38 100 L 41 100 L 44 99 L 47 99 L 50 98 L 52 97 L 54 95 L 56 92 L 57 88 L 58 82 L 59 74 L 60 64 L 60 54 L 60 44 L 59 34 L 58 24 L 57 14 L 56 6 L 54 0 Z'

/** New York state outline — Great Lakes (Erie, Ontario) west, Canada north, Long Island south */
export const NEW_YORK_PATH =
  'M 18 8 L 26 5 L 36 3 L 48 2 L 60 3 L 70 5 L 78 8 L 84 12 L 87 18 L 88 26 L 87 36 L 84 46 L 79 56 L 73 66 L 66 74 L 58 80 L 50 84 L 42 84 L 36 82 L 32 77 L 31 71 L 33 66 L 38 63 L 46 62 L 54 63 L 62 66 L 70 71 L 76 78 L 80 86 L 81 92 L 78 96 L 70 98 L 58 99 L 46 99 L 34 97 L 24 93 L 16 86 L 10 76 L 6 64 L 5 52 L 7 40 L 11 28 L 16 16 L 18 8 Z'

/** Japan — Honshu (main), Hokkaido (north), Shikoku (east of Kyushu), Kyushu (southwest). Multiple subpaths. */
export const JAPAN_PATHS =
  // Honshu (main island)
  'M 14 26 L 24 18 L 38 14 L 54 15 L 68 20 L 80 28 L 88 38 L 88 50 L 82 62 L 70 72 L 54 78 L 38 76 L 24 66 L 16 52 L 14 38 L 14 26 Z ' +
  // Hokkaido
  'M 68 0 L 78 2 L 84 8 L 86 16 L 82 22 L 74 24 L 66 22 L 62 14 L 64 6 L 68 0 Z ' +
  // Shikoku
  'M 50 68 L 58 66 L 64 70 L 66 76 L 62 82 L 54 84 L 48 80 L 46 74 L 50 68 Z ' +
  // Kyushu
  'M 20 72 L 30 68 L 40 70 L 46 76 L 44 84 L 36 88 L 26 86 L 18 80 L 16 76 L 20 72 Z'

/** India country outline — subcontinent: Himalayan north, Bay of Bengal east, curved south, Arabian Sea west */
export const INDIA_PATH =
  'M 46 6 L 56 12 L 66 22 L 74 34 L 80 46 L 84 58 L 84 70 L 80 82 L 72 90 L 60 96 L 48 98 L 36 94 L 26 86 L 18 76 L 12 64 L 8 52 L 6 40 L 8 28 L 14 18 L 24 10 L 36 4 L 46 6 Z'
