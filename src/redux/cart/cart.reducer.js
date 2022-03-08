import { removeItemFromCart } from "./cart.actions";
import { CartActionTypes } from "./cart.actions.types";
import { addItemToCart, removeItemFromCartDecrement } from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case CartActionTypes.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartitem) => cartitem.id !== action.payload.id
        ),
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCartDecrement(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
