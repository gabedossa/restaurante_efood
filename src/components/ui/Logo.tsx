interface Props {
  size?: 'sm' | 'md' | 'lg'
}

const sizes = {
  sm: 'text-base px-3 py-1.5',
  md: 'text-xl px-4 py-2',
  lg: 'text-2xl px-5 py-2.5',
}

export function Logo({ size = 'md' }: Props) {
  return (
    <span
      className={`inline-flex items-center gap-1 border border-primary text-primary font-black tracking-wide leading-none ${sizes[size]}`}
    >
      efood
      <svg width="14" height="20" viewBox="0 0 14 20" fill="currentColor" aria-hidden="true">
        <path d="M1 1v6a3 3 0 0 0 3 3v9h2v-9a3 3 0 0 0 3-3V1H8v5H6V1H4v5H2V1H1zm10 0v18h2V11h1a1 1 0 0 0 1-1V4a3 3 0 0 0-3-3h-1z" />
      </svg>
    </span>
  )
}
