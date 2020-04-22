const initialState = {
  items: [],
  page: 1,
  categories: [0],
  cart: [],
};

export default (state = initialState, action) => {
  console.log('State', state);
  console.log('Action', action);


  switch (action.type) {
    case 'SET_INFO':
      return {
        ...state,
        items: action.payload,
      };
    case 'SET_ITEMS':
      return {
        ...state,
        itemsToDisplay: action.payload,
      };
    case 'CHANGE_PAGE':
      return {
        ...state,
        page: 1,
        page: action.payload.page,
      };
    case 'PUSH_CATEGORY':
    {
      const initState = { ...state, categories: [...state.categories, action.payload.id] };
      let items2 = { ...initState };
      console.log(initState);
      items2 = items2.items[0];
      console.log(items2);
      //  items2[0].categories[0].categories[0]

      for (let i = 1; i < initState.categories.length; i++) {
        console.log(items2);
        items2 = items2.categories[initState.categories[i]];
        console.log(items2);
      }
      console.log('1', items2);
      return {
        ...state,
        page: 1,
        categories: [...state.categories, action.payload.id],
        itemsToDisplay: items2.items,
      };
    }
    case 'ROTATE_CATALOG':
    {
      const res = [];
      console.log('Action.payload=', action.payload);
      console.log('State=', state);
      const items = { ...state };
      console.log('Items', items.categories[0]);
      console.log('Items', items.categories[1]);
      for (let i = 0; i <= action.payload; i++) {
        res.push(items.categories[i]);
      }
      console.log(res);
      const initState = { ...state, categories: res };
      let items2 = { ...initState };
      console.log(items2);
      items2 = items2.items[0];
      for (let i = 1; i < initState.categories.length; i++) {
        console.log(items2);
        items2 = items2.categories[initState.categories[i]];
        console.log(items2);
      }
      console.log('2', items2);
      return {
        ...state,
        categories: res,
        itemsToDisplay: items2.items,
      };
    }
    case 'ADD_TO_CART':
    { const { cart } = state;
      console.log(cart);
      if (cart && cart.length > 0) {
        console.log(cart);
        const it = cart.find((i) => i.id === action.payload.id);
        const res = cart.filter((i) => i.id !== action.payload.id);


        console.log('res', res);
        if (it) console.log(it.count);
        if (it) {
          return {
            ...state,
            cart: [
              ...res,
              {
                id: action.payload.id,
                count: it.count + 1,
                image: action.payload.image,
                name: action.payload.name,
                price: action.payload.price,
              },
            ],
          };
        }
        return {
          ...state,
          cart: [
            ...res,
            {
              id: action.payload.id,
              count: 1,
              image: action.payload.image,
              name: action.payload.name,
              price: action.payload.price,
            },
          ],
        };
      }
      return {
        ...state,
        cart: [
          {
            id: action.payload.id,
            count: 1,
            image: action.payload.image,
            name: action.payload.name,
            price: action.payload.price,
          },
        ],
      };
    }
    case 'REMOVE_FROM_CART':
    { const { cart } = state;
      const it = cart.find((i) => i.id === action.payload.id);
      const res = cart.filter((i) => i.id !== action.payload.id);
      let nextCount;
      if (it.count === 1) {
        return {
          ...state,
          cart: [...res],
        };
      }
      return {
        ...state,
        cart: [
          ...res,
          {
            id: action.payload.id,
            count: it.count - 1,
            image: it.image,
            name: it.name,
            price: it.price,
          },

        ],
      };
    }
    case 'REMOVE_ALL_FROM_CART':
    {
      const { cart } = state;
      const res = cart.filter((i) => i.id !== action.payload.id);
      console.log(res);
      return {
        ...state,
        cart: [...res],
      };
    }
    default:
      return state;
  }
};
