'use client'

interface InputProps {
  type?: string
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  label?: string
  error?: string
  disabled?: boolean
  required?: boolean
}

export function Input({
  type = 'text',
  placeholder,
  value,
  onChange,
  label,
  error,
  disabled = false,
  required = false,
}: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-sm font-semibold text-gray-900">
          {label}
          {required && <span className="text-error"> *</span>}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`
          px-4 py-3 rounded-base border text-base font-body
          bg-gray-50 focus:bg-white
          transition-colors duration-200
          disabled:opacity-50 disabled:cursor-not-allowed
          ${error ? 'border-error focus:border-error' : 'border-gray-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'}
        `}
      />
      {error && <p className="text-sm text-error">{error}</p>}
    </div>
  )
}
