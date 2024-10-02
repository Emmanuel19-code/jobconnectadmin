import React from 'react'

const SimpleInput = ({label,placeholder,classname}) => {
  return (
    <div className='flex flex-col m-1 '>
        <label className='block mb-2 text-sm font-medium text-gray-900'>
             {label}
        </label>
        <input type='text' placeholder={placeholder} className={`outline-none  rounded-3xl p-2 text-md border ${classname}`}/>
    </div>
  )
}

export default SimpleInput