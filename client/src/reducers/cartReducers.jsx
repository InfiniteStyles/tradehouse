import {
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAILURE,
  EMPTY_CART,
  REMOVE_FROM_CART_SUCCESS,
  REMOVE_FROM_CART_FAILURE,
  FETCH_CART_SUCCESS,
  FETCH_CART_FAILURE,
  INCREASE_QUANTITY_CART_SUCCESS,
  INCREASE_QUANTITY_CART_FAILURE,
  DECREASE_QUANTITY_CART_SUCCESS,
  DECREASE_QUANTITY_CART_FAILURE,
} from '../actions/cartActions.jsx';

export function cart(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART_SUCCESS: {
      return action.cart;
    }
    case ADD_TO_CART_FAILURE: {
      return state;
    }
    case REMOVE_FROM_CART_SUCCESS: {
      return action.cart;
    }
    case REMOVE_FROM_CART_FAILURE: {
      return state;
    }
    case FETCH_CART_SUCCESS: {
      return action.cart;
    }
    case FETCH_CART_FAILURE: {
      return state;
    }
    case INCREASE_QUANTITY_CART_SUCCESS: {
      return action.cart;
    }
    case INCREASE_QUANTITY_CART_FAILURE: {
      return state;
    }
    case DECREASE_QUANTITY_CART_SUCCESS: {
      return action.cart;
    }
    case DECREASE_QUANTITY_CART_FAILURE: {
      return state;
    }
    case EMPTY_CART: {
      return [];
    }
    default: {
      return state;
    }
  }
}
