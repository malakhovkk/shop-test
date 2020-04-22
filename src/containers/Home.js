import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from '../components/Home';


const mapStateToProps = (state) => ({
  ...state,
});

function setPage(page) {
  return {
    type: 'CHANGE_PAGE',
    payload:
    {
      page,
    },
  };
}

function rotate(num) {
  return {
    type: 'ROTATE_CATALOG',
    payload: num,
  };
}

function addToCart(id, name, price, image) {
  return {
    type: 'ADD_TO_CART',
    payload:
    {
      id, name, price, image,
    },
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setPage: (page) => {
      dispatch(setPage(page));
    },
    rotate: (num) => {
      dispatch(rotate(num));
    },
    addToCart: (id, name, price, image) => {
      dispatch(addToCart(id, name, price, image));
    },
  };
}

export default connect(
  mapStateToProps, mapDispatchToProps,
)(Home);
