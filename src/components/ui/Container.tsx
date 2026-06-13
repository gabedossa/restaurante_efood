import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
}

export function Container({ children, className = '' }: Props) {
  return (
    <div className={`max-w-5xl mx-auto px-5 ${className}`}>
      {children}
    </div>
  )
}
