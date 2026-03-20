'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Page error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-[#f3f0ea]">
      <h1 className="text-xl font-semibold text-midnight mb-2">Something went wrong</h1>
      <p className="text-midnight/80 mb-4 max-w-md text-center">{error.message}</p>
      <button onClick={reset} type="button" className="btn-filled-midnight px-6 py-3">
        Try again
      </button>
    </div>
  )
}
