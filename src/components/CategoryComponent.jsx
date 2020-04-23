import React, { useState } from 'react';
import '../styles/styleHome.sass';
import CategoryItem from '../containers/CategoryItem.js';
import RotateItem from './RotateItem.jsx';

function Home(props) {
  let price = 0;
  let { items } = props.Category;
  const thisPage = [];
  const categ = [];
  const { cart } = props.Category;
  let count = 0;
  if (cart && cart.length > 0) {
    for (let i = 0; i < cart.length; i++) {
      count += cart[i].count;
      price += cart[i].count * cart[i].price;
    }
  }


  function showItemsFromPage() {
    for (let i = 0; i < props.Category.categories.length; i++) {
      categ.push({
        i: items[props.Category.categories[i]].category,
        id: i,
      });
      items = items[props.Category.categories[i]].categories;
    }
    if (items) {
      for (let i = 0; i < items.length; i++) {
        thisPage.push(
          <CategoryItem id={items[i].id} image={items[i].image} category={items[i].category} num={i} setCategory={setCategory} />,
        );
      }
    } else props.history.replace('/home');
  }
  const setCategory = (id) => {
    props.pushToCategories(parseInt(id));
    props.history.replace('/home');
  };
  const moveToCart = (e) => {
    props.history.replace('/cart');
  };
  const rotateToCatalog = (id) => {
    props.history.replace('/home');
    props.rotate(parseInt(id));
  };
  showItemsFromPage();
  return (
    <div>
      <div className="title">
        <div className="title__left">
          <div className="title__name">
            <h2>Shop</h2>
          </div>
          <div className="title__navigation">


            { categ.map(({ i, id }) => (<RotateItem id={id} rotateToCatalog={rotateToCatalog} key={id} i={i} />),

            )}


          </div>
        </div>
        <div className="title__right">
          <div className="title__cart">
            <img src="cart.png" onClick={moveToCart} />
          </div>
          <div className="title__cartInfo">
            {count}
            {' '}
            предметов | Итого:
            {price}
          </div>
        </div>


      </div>
      <div className="gallery">
        {
            thisPage.map((i) => i)
          }


      </div>

    </div>
  );
}

export default Home;
