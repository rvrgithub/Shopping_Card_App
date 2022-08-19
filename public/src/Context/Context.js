import React from 'react'
import { createContext } from 'react'
const CartContext = createContext();
export const Context = ({childern}) => {
  return (
    <CartContext.Provider>{childern}</CartContext.Provider>
  )
}
