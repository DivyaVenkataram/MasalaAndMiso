import type { ReactNode } from 'react'

type Props = {
  imageUrl: string
  children?: ReactNode
  className?: string
  minHeight?: string
}

/** Full-width edge-to-edge image section. Use gradient overlay + light text for readability. */
export default function ImmersiveImageSection({
  imageUrl,
  children,
  className = '',
  minHeight = '50vh',
}: Props) {
  return (
    <section
      className={`relative w-full bg-cover bg-center overflow-hidden ${className}`}
      style={{ minHeight }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${imageUrl}')` }}
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"
        aria-hidden
      />
      {children && (
        <div className="relative z-10 flex flex-col items-center justify-center min-h-full px-8 py-section text-center">
          {children}
        </div>
      )}
    </section>
  )
}
