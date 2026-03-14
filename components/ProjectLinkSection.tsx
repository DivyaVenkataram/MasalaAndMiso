import ProjectLinkItem from './ProjectLinkItem'

export type ProjectEntry = {
  href: string
  label: string
  external?: boolean
}

type ProjectLinkSectionProps = {
  title?: string
  items: ProjectEntry[]
  columns?: 1 | 2 | 3
  className?: string
}

/**
 * Responsive section of project/item links (e.g. "More projects", "Related").
 * Clean grid, no extra wrappers.
 */
export default function ProjectLinkSection({
  title = 'Weitere Projekte',
  items,
  columns = 2,
  className = '',
}: ProjectLinkSectionProps) {
  return (
    <section className={`max-w-layout mx-auto px-6 sm:px-8 py-12 sm:py-16 ${className}`.trim()}>
      {title && (
        <h2 className="font-playfair text-2xl sm:text-3xl font-medium text-midnight mb-8 tracking-tight">
          {title}
        </h2>
      )}
      <ul
        className={`grid gap-0 list-none p-0 m-0 ${
          columns === 1
            ? 'grid-cols-1'
            : columns === 2
              ? 'grid-cols-1 sm:grid-cols-2'
              : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
        }`}
      >
        {items.map((item) => (
          <li key={item.href}>
            <ProjectLinkItem href={item.href} external={item.external}>
              {item.label}
            </ProjectLinkItem>
          </li>
        ))}
      </ul>
    </section>
  )
}
