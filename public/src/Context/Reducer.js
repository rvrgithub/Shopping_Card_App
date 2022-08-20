import * as types from "./actionType";
export const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, { ...payload, qty: 1 }],
      };
    case types.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((e) => e.id !== payload.id),
      };

    case types.CHANGE_CART_QTY:
      return {
        ...state,
        cart: state.cart.filter((e) =>
          e.id === payload.id ? (e.qty = payload.qty) : e.qty
        ),
      };
    default:
      return state;
  }
};

export const filterReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.SORT_BY_PRICE:
      return {
        ...state,
        sort: payload,
      };
    case types.FILTER_BY_STOCK:
      return {
        ...state,
        byStock: !state.byStock,
      };
    case types.FILTER_BY_DELIVERY:
      return {
        ...state,
        byFastDelivery: !state.byFastDelivery,
      };
    case types.FILTER_BY_RATING:
      return {
        ...state,
        byRating: payload,
      };
    case types.CLEAR_FILTER:
      return {
        byStock: false,
        byFastDelivery: false,
        byRating: 0,
      };
    default:
      return state;
  }
};
