export const initialState = {
  basket: [],
};

//selector
export const getBasketTotal = (basket) =>
basket?.reduce((amount,item) => item.price + amount,0);
//using reduce to itterate over the basket and tally up item prices and added them  the amount
//and we setup the initial value of amount to 0
//optional chaining (?) is added to save undefined problems 
const reducer = (state, action) => {
    console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    default:
      return state;
  }
};

export default reducer;
