'use client'

import { useMemo, useState } from 'react'
import { rankingsData } from '@/data/rankings'

const locationOptions = ['', 'San Francisco', 'New York', 'Los Angeles', 'Japan']
const cuisineOptions = ['', 'Indian fusion', 'Contemporary Californian', 'Thai / Californian', 'Filipino']
const starsOptions = ['', 'Guide', '1']

function getStarsValue(michelin: string): string {
  if (michelin.startsWith('1')) return '1'
  if (michelin.startsWith('Guide')) return 'Guide'
  return ''
}

export default function RankingsPage() {
  const [location, setLocation] = useState('')
  const [cuisine, setCuisine] = useState('')
  const [stars, setStars] = useState('')

  const filtered = useMemo(() => {
    return rankingsData.filter((row) => {
      if (location && row.location !== location) return false
      if (cuisine && row.cuisine !== cuisine) return false
      if (stars && getStarsValue(row.michelin) !== stars) return false
      return true
    })
  }, [location, cuisine, stars])

  const reset = () => {
    setLocation('')
    setCuisine('')
    setStars('')
  }

  return (
    <main className="pt-28 pb-20">
      <div className="max-w-layout mx-auto px-6">
        <h1 className="font-playfair text-5xl sm:text-6xl font-semibold uppercase tracking-brand text-midnight mb-4">
          RANKINGS
        </h1>
        <p className="font-baskerville text-xl text-midnight/80 mb-12 max-w-reading">
          Filter by location, price, cuisine—and reserve your next meal.
        </p>

        <div className="flex flex-wrap items-center gap-4 mb-8">
          <label htmlFor="filter-location" className="font-semibold text-midnight">
            Location
          </label>
          <select
            id="filter-location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="px-3 py-2 border border-neutral/60 rounded-sm bg-white font-sans text-midnight min-w-[140px]"
          >
            {locationOptions.map((opt) => (
              <option key={opt || 'all'} value={opt}>
                {opt || 'All'}
              </option>
            ))}
          </select>
          <label htmlFor="filter-cuisine" className="font-semibold text-midnight ml-2">
            Cuisine
          </label>
          <select
            id="filter-cuisine"
            value={cuisine}
            onChange={(e) => setCuisine(e.target.value)}
            className="px-3 py-2 border border-neutral/60 rounded-sm bg-white font-sans text-midnight min-w-[200px]"
          >
            {cuisineOptions.map((opt) => (
              <option key={opt || 'all'} value={opt}>
                {opt || 'All'}
              </option>
            ))}
          </select>
          <label htmlFor="filter-stars" className="font-semibold text-midnight ml-2">
            Michelin
          </label>
          <select
            id="filter-stars"
            value={stars}
            onChange={(e) => setStars(e.target.value)}
            className="px-3 py-2 border border-neutral/60 rounded-sm bg-white font-sans text-midnight min-w-[120px]"
          >
            {starsOptions.map((opt) => (
              <option key={opt || 'all'} value={opt}>
                {opt || 'All'}
              </option>
            ))}
          </select>
          <button
            type="button"
            onClick={reset}
            className="ml-4 px-5 py-2 bg-ocean text-white font-medium rounded-sm transition-colors duration-200 hover:bg-burgundy"
          >
            Reset
          </button>
        </div>

        <div className="overflow-x-auto rounded-sm border border-neutral/40 shadow-md">
          <table className="w-full border-collapse bg-white">
            <thead>
              <tr className="bg-midnight text-white">
                <th className="text-left font-baskerville font-bold py-4 px-4">Restaurant</th>
                <th className="text-left font-baskerville font-bold py-4 px-4">Location</th>
                <th className="text-left font-baskerville font-bold py-4 px-4">Cuisine</th>
                <th className="text-left font-baskerville font-bold py-4 px-4">Michelin</th>
                <th className="text-left font-baskerville font-bold py-4 px-4">Rating (1–10)</th>
                <th className="text-left font-baskerville font-bold py-4 px-4">Reserve</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((row) => (
                <tr
                  key={row.id}
                  className="border-t border-neutral/30 hover:bg-neutral/30 transition-colors"
                >
                  <td className="py-3 px-4 font-medium text-midnight">{row.restaurant}</td>
                  <td className="py-3 px-4 text-midnight/90">{row.location}</td>
                  <td className="py-3 px-4 text-midnight/90">{row.cuisine}</td>
                  <td className="py-3 px-4 text-midnight/90">{row.michelin}</td>
                  <td className="py-3 px-4 text-midnight/90">{row.rating}</td>
                  <td className="py-3 px-4">
                    {row.reserveHref !== '#' ? (
                      <a
                        href={row.reserveHref}
                        className="inline-block px-4 py-2 bg-ocean text-white text-sm font-medium rounded-sm transition-colors duration-200 hover:bg-burgundy"
                      >
                        Reserve →
                      </a>
                    ) : (
                      <span className="text-midnight/50 text-sm">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}
