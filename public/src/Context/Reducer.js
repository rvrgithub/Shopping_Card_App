import * as types from "./actionType";
export const cartReducer = (state,action) => {
  const {type,payload} = action
  switch (type){
case types.ADD_TO_CART:
return {
...state ,
cart:[...state.cart , {...payload, qty:1} ]

};
case types.REMOVE_FROM_CART:
return {
...state,
cart :state.cart.filter((e)=>e.id !== payload.id)
};

case types.CHANGE_CART_QTY:
return {
...state,
cart :state.cart.filter((e)=>e.id === payload.id ? (e.qty= payload.qty):(e.qty))
};
    default : return state 
  }
  
}
