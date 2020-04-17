import React, { useState } from 'react';
import '../styles/styleHome.sass';

function Home(props) {

  let price = 0;
  let items = props.Category.items;
  let thisPage = [];
  let categ = [];
let cart = props.Category.cart;
  let count = 0;
  if(cart && cart.length > 0)
  for(let i = 0; i < cart.length;i++)
  {
    count += cart[i].count
      price += cart[i].count*cart[i].price;
  }
 console.log(props);


  function showItemsFromPage()
  {
    console.log("items",items);
    for(let i = 0; i < props.Category.categories.length; i++)
    {
      console.log(items[props.Category.categories[i]]);
      categ.push({
        i:  items[props.Category.categories[i]].category,
        id:i
      });
      items = items[props.Category.categories[i]].categories
    }
    console.log(items);
    if (items)
    for(let i = 0; i < items.length; i++ )
    {
      console.log(items[i].id);
      thisPage.push(
    <div className="gallery__item"  key={items[i].id}>
      <div className="gallery__item__block">
        <div className="gallery__item__left">
          <div className="gallery__item__image"><img src={items[i].image}/></div>
        </div>
        <div className="gallery__item__right">
          <div className="gallery__item__name">{items[i].category}</div>
        </div>
      </div>
      <div className="gallery__item__cart">
        <div className="gallery__item__cart__content" id={i}  onClick={setCategory}>
          <a className="cart" >Перейти</a>
        </div>
      </div>
    </div>
    );
  }

  else props.history.replace("/home");

  }
  const setCategory = (e) => {

    let id = e.currentTarget.id;
    console.log("id",id)
    props.pushToCategories(parseInt(id));



    props.history.replace("/home");
  }
  const moveToCart = (e) =>
  {
    props.history.replace("/cart");
  }
  const rotateToCatalog = (e) =>
  {
    props.history.replace("/home");
    console.log("EEE",e.currentTarget.id);
    props.rotate(parseInt(e.currentTarget.id));
  }
  showItemsFromPage();
  return (
    <div>
      <div className='title'>
        <div className='title__left'>
          <div className='title__name'>
            <h2>Shop</h2>
          </div>
          <div className='title__navigation'>



                {  categ.map(({i,id})=>{
                  return (<div className='title__navigation__item' id={id} onClick={rotateToCatalog} key={id}>   {i} /</div>);
                  })
                }




          </div>
        </div>
        <div className='title__right'>
          <div className='title__cart'>
            <img src='cart.png' onClick={moveToCart}/>
          </div>
          <div className='title__cartInfo'>
          {count} предметов | Итого: {price}
          </div>
        </div>


      </div>
      <div className="gallery">
          {
            thisPage.map(i=>{
              return i
            })
          }


      </div>

    </div>
)
}

export default Home;
