import React, { useContext, useReducer } from "react";
import { createContext } from "react";
// import faker from "faker"
import { faker } from "@faker-js/faker";
import { cartReducer, filterReducer } from "./Reducer";
const CartContext = createContext();

export const Context = ({ children }) => {
  faker.seed(99);
  const products = [...Array(20)].map(() => ({
    image: faker.image.image(),
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    inStock: Math.floor(Math.random() * 5),
    rating: Math.floor(Math.random() * 5),
    fastDelivery: faker.datatype.boolean(),
  }));
  // console.log("products", products);
  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  // filter context  .....
  const [filterState, filterDispatch] = useReducer(filterReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
  });
  return (
    <CartContext.Provider
      value={{ state, dispatch, filterState, filterDispatch }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const CartState = () => {
  return useContext(CartContext);
};
