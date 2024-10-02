import React from 'react'

const TableElements = () => {
  return (
    <tr className='border-b'>
            <td className="px-4 py-2 text-center text-sm">John Doe</td>
            <td className="px-4 py-2 text-center text-sm">john@example.com</td>
            <td className="px-4 py-2 text-center text-sm">123-456-7890</td>
            <td className="px-4 py-2 text-center text-sm">Bachelor's Degree</td>
            <td className="px-4 py-2 text-center text-sm">
              <a href="cv-link.pdf" className="text-blue-500">
                view
              </a>
            </td>
          </tr>
  )
}

export default TableElements