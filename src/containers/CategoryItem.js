import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CategoryItem from '../components/CategoryItem.jsx';


const mapStateToProps = (state) => ({
  ...state,
});

function pushCategories(id) {
  return {
    type: 'PUSH_CATEGORY',
    payload:
    {
      id,
    },
  };
}

function set(items) {
  return {
    type: 'SET_ITEMS',
    payload: items,
  };
}

function rotate(num) {
  return {
    type: 'ROTATE_CATALOG',
    payload: num,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    pushToCategories: (id) => {
      dispatch(pushCategories(id));
    },
    setItems: (items) => {
      dispatch(set(items));
    },
    rotate: (num) => {
      dispatch(rotate(num));
    },
  };
}

export default connect(
  mapStateToProps, mapDispatchToProps,
)(CategoryItem);
