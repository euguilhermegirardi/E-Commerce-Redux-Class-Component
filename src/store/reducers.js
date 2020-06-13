import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART } from './actions';

const initialState = {
  products: [
    {
      id: 'p1',
      title: 'Men Atwood Canvas Trainers',
      image: "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg",
      price: 29.99
    },
    {
      id: 'p2',
      title: 'Mens Speedcross 4 Trail Running Shoes',
      image: "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg",
      price: 12.99
    },
    {
      id: 'p3',
      title: 'Mens Tazon 6 FM Running Shoes',
      image: "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg",
      price: 10.99
    },
    {
      id: 'p4',
      title: 'Mens Status 2.0 Pexton Boat Shoes',
      image: "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg",
      price: 42.99
    }
  ],
  cart: []
};

const shopReducer = (state = initialState, action) => {
  let updatedCart;
  let updatedItemIndex;

  switch (action.type) {

    case ADD_PRODUCT_TO_CART:
      updatedCart = [...state.cart];
      updatedItemIndex = updatedCart.findIndex( item => item.id === action.payload.id );

      if (updatedItemIndex < 0) {
        updatedCart.push({ ...action.payload, quantity: 1 });
      } else {
        const updatedItem = { ...updatedCart[updatedItemIndex] };
        updatedItem.quantity++;
        updatedCart[updatedItemIndex] = updatedItem;
      }
      return { ...state, cart: updatedCart };

    case REMOVE_PRODUCT_FROM_CART:
      updatedCart = [...state.cart];
      updatedItemIndex = updatedCart.findIndex( item => item.id === action.payload );
      const updatedItem = { ...updatedCart[updatedItemIndex] };
      updatedItem.quantity--;

      if (updatedItem.quantity <= 0) {
        updatedCart.splice(updatedItemIndex, 1);
      } else {
        updatedCart[updatedItemIndex] = updatedItem;
      }
      return { ...state, cart: updatedCart};

    default:
      return state;

  }
};

export default shopReducer;

