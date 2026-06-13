import type { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  fullWidth?: boolean
}

export function Button({ variant = 'primary', fullWidth, className = '', children, ...rest }: Props) {
  const base = 'px-4 py-2 text-sm font-bold transition-colors cursor-pointer disabled:opacity-50 text-center rounded-none'
  const variants = {
    primary: 'bg-primary text-bg-peach border border-primary hover:bg-primary-dark hover:border-primary-dark',
    secondary: 'bg-bg-peach text-primary border border-bg-peach hover:bg-bg-peach/90 hover:border-bg-peach/90',
    outline: 'bg-transparent text-primary border border-primary hover:bg-primary hover:text-bg-peach',
  }
  return (
    <button
      className={`${base} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}

