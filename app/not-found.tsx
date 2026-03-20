import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-[#f3f0ea] text-midnight">
      <h1 className="text-2xl font-semibold mb-2">Page not found</h1>
      <p className="text-midnight/80 mb-6">The page you’re looking for doesn’t exist.</p>
      <Link href="/" className="btn-filled-midnight">
        Back to home
      </Link>
    </div>
  )
}
