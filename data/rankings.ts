export type RankingRow = {
  id: string
  restaurant: string
  location: string
  cuisine: string
  michelin: string
  rating: string
  reserveHref: string
}

export const rankingsData: RankingRow[] = [
  { id: '1', restaurant: 'Tiya', location: 'San Francisco', cuisine: 'Indian fusion', michelin: 'Guide 2024–25', rating: '4.3', reserveHref: '#' },
  { id: '2', restaurant: 'Snail Bar', location: 'San Francisco', cuisine: 'Contemporary Californian', michelin: 'Guide 2023–25', rating: '6.8', reserveHref: '#' },
  { id: '3', restaurant: 'Nari', location: 'San Francisco', cuisine: 'Thai / Californian', michelin: '1 Star 2023–25', rating: '7.6', reserveHref: '#' },
  { id: '4', restaurant: 'F.O.B. Kitchen', location: 'San Francisco', cuisine: 'Filipino', michelin: 'Guide 2021–25', rating: '5.6', reserveHref: '#' },
  { id: '5', restaurant: 'Placeholder', location: 'New York', cuisine: '—', michelin: '—', rating: '—', reserveHref: '#' },
  { id: '6', restaurant: 'Placeholder', location: 'Los Angeles', cuisine: '—', michelin: '—', rating: '—', reserveHref: '#' },
  { id: '7', restaurant: 'Placeholder', location: 'Japan', cuisine: '—', michelin: '—', rating: '—', reserveHref: '#' },
]
