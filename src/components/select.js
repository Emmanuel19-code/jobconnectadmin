import React from 'react'

const Select = ({label,data}) => {
  return (
    <div className='flex flex-col m-1 border  p-1 rounded-3xl overlflow-hidden'>
        <select className='outline-none p-1 bg-white text-gray-700 rounded-lg transition duration-200'>
        {data.map((item, index) => (
          <option key={index} value={item.value} >
            {item.value}
          </option>
        ))}
             
        </select>
    </div>
  )
}

export default Select