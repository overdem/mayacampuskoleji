'use client'

type BadgeVariant = 'success' | 'error' | 'warning' | 'info' | 'default'

interface BadgeProps {
  children: string
  variant?: BadgeVariant
}

export function Badge({ children, variant = 'default' }: BadgeProps) {
  const variantStyles = {
    success: 'bg-green-100 text-success border border-green-300',
    error: 'bg-red-100 text-error border border-red-300',
    warning: 'bg-yellow-100 text-warning border border-yellow-300',
    info: 'bg-blue-100 text-info border border-blue-300',
    default: 'bg-gray-200 text-gray-800 border border-gray-300',
  }

  return (
    <span
      className={`
        inline-block px-3 py-1 rounded-full text-xs font-semibold
        ${variantStyles[variant]}
      `}
    >
      {children}
    </span>
  )
}
