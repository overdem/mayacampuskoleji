'use client'

import { ReactNode } from 'react'

interface TableProps {
  headers: string[]
  rows: (string | number | ReactNode)[][]
  striped?: boolean
}

export function Table({ headers, rows, striped = true }: TableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 border-b border-gray-300">
            {headers.map((header, idx) => (
              <th
                key={idx}
                className="px-4 py-3 text-left text-sm font-semibold text-gray-900"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr
              key={idx}
              className={`
                border-b border-gray-200 hover:bg-gray-50 transition-colors
                ${striped && idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
              `}
            >
              {row.map((cell, cellIdx) => (
                <td key={cellIdx} className="px-4 py-3 text-sm text-gray-700">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
