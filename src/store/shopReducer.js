export const initialState = {
  total: 0,
  products: []
};

const shopReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TO_CART":
      console.log("ADD_TO_CART", action.payload);
      return {
        ...state,
        products: payload.products
      };

    case "REMOVE_FROM_CART":
      console.log("REMOVE_FROM_CART", action.payload);
      return {
        ...state,
        products: payload.products
      };

    case "UPDATE_PRICE":
      console.log("UPDATE_PRICE", action.payload);
      return {
        ...state,
        products: payload.total
      };
    default:
      throw new Error(`No case for type ${type} found in shopReducer.`);
  }
};

export default shopReducer;
