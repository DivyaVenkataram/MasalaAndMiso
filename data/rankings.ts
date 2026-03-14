export type RankingRow = {
  id: string
  restaurant: string
  location: string
  cuisine: string
  michelin: string
  rating: string
  reserveHref: string
  postSlug?: string
  image?: string
}

export const rankingsData: RankingRow[] = [
  { id: '1', restaurant: 'Tiya', location: 'San Francisco', cuisine: 'Indian fusion', michelin: 'Guide 2024–25', rating: '4.3', reserveHref: '#', postSlug: 'tiya', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80' },
  { id: '2', restaurant: 'Snail Bar', location: 'San Francisco', cuisine: 'Contemporary Californian', michelin: 'Guide 2023–25', rating: '6.8', reserveHref: '#', postSlug: 'snail-bar', image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80' },
  { id: '3', restaurant: 'Nari', location: 'San Francisco', cuisine: 'Thai / Californian', michelin: '1 Star 2023–25', rating: '7.6', reserveHref: '#', postSlug: 'nari', image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=400&q=80' },
  { id: '4', restaurant: 'F.O.B. Kitchen', location: 'San Francisco', cuisine: 'Filipino', michelin: 'Guide 2021–25', rating: '5.6', reserveHref: '#', postSlug: 'fob-kitchen', image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400&q=80' },
  { id: '5', restaurant: 'Placeholder', location: 'New York', cuisine: '—', michelin: '—', rating: '—', reserveHref: '#' },
  { id: '6', restaurant: 'Placeholder', location: 'Los Angeles', cuisine: '—', michelin: '—', rating: '—', reserveHref: '#' },
  { id: '7', restaurant: 'Placeholder', location: 'Japan', cuisine: '—', michelin: '—', rating: '—', reserveHref: '#' },
]
