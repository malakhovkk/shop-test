const initialState = {
};

export default (state = initialState, action) => {
  console.log("State",state);
  console.log("Action",action);


  switch (action.type) {

    case "ADD_TO_CART":
      let cart = state.cart
      console.log(cart);
      if(cart && cart.length > 0)
      {
        console.log(cart);
        let it = cart.find(i =>i.id === action.payload)
        let res = cart.filter(i =>  i.id !== action.payload)


        console.log("res",res);
        if(it) console.log(it.count)
        if(it)
        return {
          ...state,
          cart:[
            ...res,
            {id:action.payload.id,
            count: it.count + 1,
            image:action.payload.image,
            name:action.payload.name,
            price:action.payload.price}
            ]
          }
          else {
            return {
              ...state,
              cart:[
                ...res,
                {id:action.payload.id,
                count: 1,
                image:action.payload.image,
                name:action.payload.name,
                price:action.payload.price}
              ]
            }
          }
      }
      else {
        return {
          ...state,
          cart:[
            {id:action.payload.id,
            count: 1,
            image:action.payload.image,
            name:action.payload.name,
            price:action.payload.price}
          ]
        }
      }
    default:
      return state;
  }
};
