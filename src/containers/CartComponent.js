import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CartComponent from '../components/CartComponent';


const mapStateToProps = (state) => {
  return {
    cart: state.Category.cart,
  };
};


function addToCart(id, name, price, image) {
  return {
    type: 'ADD_TO_CART',
    payload:
    {
      id, name, price, image,
    },
  };
}

function removeFromCart(id) {
  return {
    type: 'REMOVE_FROM_CART',
    payload:
    { id },
  };
}

function removeAll(id) {
  return {
    type: 'REMOVE_ALL_FROM_CART',
    payload:
    { id },
  };
}
function mapDispatchToProps(dispatch) {
  return {
    addToCart: (id, name, price, image) => {
      dispatch(addToCart(id, name, price, image));
    },
    removeFromCart: (id) => {
      dispatch(removeFromCart(id));
    },
    removeAllFromCart: (id) => {
      dispatch(removeAll(id));
    },
  };
}

export default connect(
  mapStateToProps, mapDispatchToProps,
)(CartComponent);
