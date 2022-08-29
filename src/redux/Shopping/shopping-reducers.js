import * as actionTypes from './shopping-types';

const INITIAL_STATE = {
  products: [

  ],
  cart: [],
  isOpen: false,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Check item data from product list
      const item = state.products.find(
        (product) => product.id === action.payload.productId
      );

      // Check if product is in cart already
      const inCart = state.cart.find((product) =>
        product.id === action.payload.productId ? true : false
      );

      let cart = [];
      if (inCart) {
        cart = state.cart.map((item) =>
          item.id === action.payload.productId
            ? {
              ...item,
              quantity: item.quantity + 1,
            }
            : item
        );
      } else {
        cart = [...state.cart, { ...item, quantity: 1 }];
      }

      return {
        ...state,
        cart: cart,
      };

    case actionTypes.SAVE_CART:
      return { ...state, cart: action.payload }
    case actionTypes.REMOVE_CART_ITEM:
      const newCart = state.cart.filter((item) => item.id !== action.payload.itemId);
      return { ...state, cart: newCart }
    case actionTypes.TOGGLE_OPEN_CART:
      return {
        ...state,
        isOpen: !state.isOpen,
      };

    case actionTypes.FETCH_PRODUCT_LIST:
      console.log('Products==', action.payload);
      return {
        ...state,
        products: action.payload,
      };

    case actionTypes.FETCH_CART:
      console.log('Products==', action.payload);
      return {
        ...state,
        cart: action.payload,
      };

    case actionTypes.DECREASE_QTY_ITEM:
      const newItem = state.cart.filter((item) => item.id !== action.payload.itemId) ? item.quantity - 1 : item;
      return { ...state, item: newItem };
    default:
      return state;
  }
};

export default shopReducer;
