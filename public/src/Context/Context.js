import React, { useContext, useReducer } from 'react'
import { createContext } from 'react'
// import faker from "faker"
import { faker } from '@faker-js/faker';
import { cartReducer } from './Reducer';
const CartContext = createContext();
export const Context = ({children}) => {
  faker.seed(99);
  const products =[...Array(25)].map(()=>({
    image: faker.image.image(),
id: faker.datatype.uuid(),
name: faker.commerce.productName(),
price: faker.commerce.price(),
// image: faker.random.image(),
// inStock:faker.random.arrayElement([1,2,3,4,5,6]),
// inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
fastDelivery: faker.datatype.boolean(),
  }))
// console.log("products",products)
const [state, dispatch]  =useReducer(cartReducer,{
  products:products,
  cart:[]
})
  return (
    <CartContext.Provider value={{state,dispatch}}>{children}</CartContext.Provider>
  )
}

export const CartState =()=>{
  return useContext(CartContext);
}