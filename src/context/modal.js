import React, { createContext, useState } from 'react'

export const ModalContext = createContext()

const ModalProvider = ({children}) => {
    const [open,setOpen] = useState(false)
  return (
    <ModalContext.Provider value={{open,setOpen}}>
         {children}
    </ModalContext.Provider>
  )
}

export default ModalProvider