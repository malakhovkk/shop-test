import React, { useState } from 'react';
import '../styles/styleHome.sass';
import CategoryItem from '../containers/CategoryItem.js';
import RotateItem from './RotateItem.jsx';
import PageItem from './PageItem.jsx';
import GalleryItem from './GalleryItem.jsx';

function Home(props) {
  const [state, setState] = useState([...props.Category.itemsToDisplay]);


  console.log('HOME PROPS', props);
  console.log('STATE', state);
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

  // console.log(price);
  console.log(props.Category.items);
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
    console.log('TTTT', t);
    props.addToCart(id, t.itemName, t.price, t.image);
  };


  const thisPage = [];
  function showItemsFromPage(page) {
    for (let i = (page - 1) * 12; i <= (page - 1) * 12 + 11 && i < items.length; i++) {
      console.log(i);
      thisPage.push(
        <GalleryItem key={items[i].id} id={items[i].id} image={items[i].image} price={items[i].price} itemName={items[i].itemName} addToCart={addToCart} />,
      );
    }
  }

  const categ = [];
  function showCatalogs() {
    console.log(props.Category);
    let items2 = props.Category.items;
    for (let i = 0; i < props.Category.categories.length; i++) {
      console.log(items2[props.Category.categories[i]]);
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
  // console.log(e.currentTarget.id);
    props.history.replace('/category');
    props.rotate(parseInt(id));
  };

  // console.log(thisPage)
  console.log('A', categ);
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
      <div className="gallery">
        {
            thisPage.map((i) => i)
          }


      </div>
      <div className="pages">
        {
        pag.map((i) => <PageItem key={i} i={i} setPage={setPage} />)
      }
      </div>
    </div>

  );
}

export default Home;
