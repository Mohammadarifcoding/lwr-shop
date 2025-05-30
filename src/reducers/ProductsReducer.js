import { ProductData } from '../data/ProductData';

export const initialState = {
  products: [...ProductData],
  cart: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const updateProducts = state.products.map((item) => {
        if (item.id === action.payload.productId) {
          return {
            ...item,
            stock: item.stock - 1,
            isInCart: true,
          };
        } else {
          return {
            ...item,
          };
        }
      });

      return {
        ...state,
        products: updateProducts,
        cart: [...state.cart, { ...action.payload }],
      };
    }
    case 'UPDATE_CART': {
      const updatedProducts = state.products.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            stock: item.stock - action.payload.quantity,
            isInCart: true,
          };
        } else {
          return {
            ...item,
          };
        }
      });
      const updateCartItems = state.cart.map((item) => {
        if (item.productId === action.payload.id) {
          return {
            ...item,
            quantity: item.quantity + action.payload.quantity,
          };
        } else {
          return item;
        }
      });
      return {
        ...state,
        cart: updateCartItems,
        products: updatedProducts,
      };
    }
    case 'REMOVE_FROM_CART': {
      const findFromCart = state.cart.find((item) => item.productId === action.payload.productId);
      const updateProducts = state.products.map((item) => {
        if (item.id == action.payload.productId) {
          return {
            ...item,
            stock: item.stock + findFromCart.quantity,
            isInCart: false,
          };
        } else {
          return {
            ...item,
          };
        }
      });

      const updatedCart = state.cart.filter((item) => item.productId !== action.payload.productId);
      return {
        ...state,
        products: updateProducts,
        cart: updatedCart,
      };
    }
    default:
      return state;
  }
};
