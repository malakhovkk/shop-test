const initialState = {
  items: [],
  page: 1,
  categories: [0],
  cart: [],
};

export default (state = initialState, action) => {

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
      items2 = items2.items[0];

      for (let i = 1; i < initState.categories.length; i++) {
        items2 = items2.categories[initState.categories[i]];
      }
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
      const items = { ...state };
      for (let i = 0; i <= action.payload; i++) {
        res.push(items.categories[i]);
      }
      const initState = { ...state, categories: res };
      let items2 = { ...initState };
      items2 = items2.items[0];
      for (let i = 1; i < initState.categories.length; i++) {
        items2 = items2.categories[initState.categories[i]];
      }
      return {
        ...state,
        categories: res,
        itemsToDisplay: items2.items,
      };
    }
    case 'ADD_TO_CART':
    {
      const { cart } = state;
      if (cart && cart.length > 0) {
        const it = cart.find((i) => i.id === action.payload.id);
        const res = cart.filter((i) => i.id !== action.payload.id);
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
