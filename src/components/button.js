import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({name}) => {
  return (
    <button className='bg-[#6b21a8] w-96 p-1 rounded-2xl text-white m-2' >
        <Link to={"/dashboard"}>
        {name}
        </Link>
         
    </button>
  )
}

export default Button