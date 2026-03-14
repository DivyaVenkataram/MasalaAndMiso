import Link from 'next/link'

type ProjectLinkItemProps = {
  href: string
  children: React.ReactNode
  external?: boolean
  className?: string
}

/**
 * Single project/item link. Use in a grid or list for "more projects" sections.
 * Clean, minimal, responsive. No extra wrappers.
 */
export default function ProjectLinkItem({
  href,
  children,
  external = false,
  className = '',
}: ProjectLinkItemProps) {
  const base =
    'block font-editorial text-midnight/90 text-[17px] leading-snug py-3 border-b border-black/8 last:border-b-0 hover:text-ocean hover:border-ocean/40 transition-colors duration-200'

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${className}`.trim()}
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={`${base} ${className}`.trim()}>
      {children}
    </Link>
  )
}
