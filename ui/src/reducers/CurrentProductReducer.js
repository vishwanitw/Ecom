
const INITIAL_STATE = {
  currentproducts: [],
  isFetching: false
};

function CurrentProductsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'FETCH_CURRENT_PRODUCT_REQUEST':
    return Object.assign({}, state, {
      isFetching: true
    });
  case 'FETCH_CURRENT_PRODUCT_SUCCESS':
    return Object.assign({}, state, {
      isFetching: false,
      currentproducts: action.payload
    });
  default:
    return state;
  }
}

export default CurrentProductsReducer;