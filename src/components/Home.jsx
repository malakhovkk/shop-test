import React, { useState } from 'react';
import '../styles/styleHome.sass';
import CategoryItem from '../containers/CategoryItem.js';
import RotateItem from './RotateItem.jsx';
import PageItem from './PageItem.jsx';
import GalleryItem from './GalleryItem.jsx';

function Home(props) {
  const [state, setState] = useState([...props.Category.itemsToDisplay]);


  const items = props.Category.itemsToDisplay;
  const { cart } = props.Category;
  let count = 0;
  let price = 0;
  if (cart && cart.length > 0) {
    for (let i = 0; i < cart.length; i++) {
      count += cart[i].count;
      price += cart[i].count * cart[i].price;
    }
  }

  const pagesNum = (items.length + 11) / 12;
  const { pages } = props.Category;
  const pag = [];
  function getpages() {
    for (let i = 1; i <= pagesNum; i++) {
      pag.push(i);
    }
  }

  const setPage = (page) => {
    props.setPage(page);
  };


  const addToCart = (id) => {
    const t = state.find((i) => i.id === parseInt(id));
    props.addToCart(id, t.itemName, t.price, t.image);
  };


  const thisPage = [];
  function showItemsFromPage(page) {
    for (let i = (page - 1) * 12; i <= (page - 1) * 12 + 11 && i < items.length; i++) {
      thisPage.push(
        <GalleryItem id={items[i].id} image={items[i].image} price={items[i].price} itemName={items[i].itemName} addToCart={addToCart} />,
      );
    }
  }

  const categ = [];
  function showCatalogs() {
    let items2 = props.Category.items;
    for (let i = 0; i < props.Category.categories.length; i++) {
      categ.push({ i: items2[props.Category.categories[i]].category, id: i });
      items2 = items2[props.Category.categories[i]].categories;
    }
  }

  const moveToCart = (e) => {
    props.history.replace('/cart');
  };

  const thisPageCategories = [];

  getpages();
  showItemsFromPage(props.Category.page);
  showCatalogs();

  const rotateToCatalog = (id) => {
    props.history.replace('/category');
    props.rotate(parseInt(id));
  };

  return (
    <div>
      <div className="title">
        <div className="title__left">
          <div className="title__name">
            <h2>Shop</h2>
          </div>
          <div className="title__navigation">


            { categ.map(({ i, id }) => (<RotateItem id={id} rotateToCatalog={rotateToCatalog} key={id} i={i} />))}


          </div>
        </div>
        <div className="title__right">
          <div className="title__cart">
            <img src="cart.png" onClick={moveToCart} />
          </div>
          <div className="title__cartInfo">
            {count}
            {' '}
            предметов(а) | Итого:
            {price}
          </div>
        </div>


      </div>
      <div className="basis">
        <div className="gallery">
          {
            thisPage.map((i) => i)
          }


        </div>
        <div className="pages">
          {
            pag.map((i) => <PageItem i={i} setPage={setPage} />)
          }
          </div>
      </div>
    </div>

  );
}

export default Home;
