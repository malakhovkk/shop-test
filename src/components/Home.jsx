import React, { useState } from 'react';
import '../styles/styleHome.sass';

function Home(props) {

const [state, setState] = useState([...props.Category.itemsToDisplay]);



console.log("HOME PROPS",props);
console.log("STATE",state);
let items = props.Category.itemsToDisplay;
let cart = props.Category.cart;
let count = 0;
let price = 0;
if(cart && cart.length > 0)
for(let i = 0; i < cart.length;i++)
{
  count += cart[i].count
  price += cart[i].count*cart[i].price;
}

//console.log(price);
console.log(props.Category.items);
let pagesNum = (items.length + 11) / 12;
let {pages} = props.Category;
let pag = []
function getpages()
{
  for(let i = 1; i <= pagesNum; i++)
  {
    pag.push(i);
  }
}

const setPage  = (e) =>{
  props.setPage(e.currentTarget.id);
}



const addToCart  = (e) =>{
  let t = state.find(i => i.id === parseInt(e.currentTarget.id));
  console.log("TTTT",t);
  props.addToCart(e.currentTarget.id, t.itemName, t.price, t.image);
}


let thisPage = [];
function showItemsFromPage(page)
{
  for(let i = (page-1)*12; i <= (page-1)*12 + 11 && i <items.length; i++ )
  {
    console.log(i);
    thisPage.push(
  <div className="gallery__item" key={items[i].id}>
    <div className="gallery__item__block">
      <div className="gallery__item__left">
        <div className="gallery__item__image"><img src={items[i].image}/></div>
      </div>
      <div className="gallery__item__right">
        <div className="gallery__item__price">{items[i].price}</div>
        <div className="gallery__item__name">{items[i].itemName}</div>
      </div>
    </div>
    <div className="gallery__item__cart">
      <div className="gallery__item__cart__content">
        <a className="cart" onClick={addToCart} id={items[i].id}>В корзину</a>
      </div>
    </div>
  </div>
  );
}
}

let categ = []
function showCatalogs()
{
  console.log(props.Category);
  let items2 = props.Category.items
  for(let i = 0; i < props.Category.categories.length; i++)
  {

    console.log(items2[props.Category.categories[i]])
    categ.push({i:items2[props.Category.categories[i]].category, id:i} );
    items2 = items2[props.Category.categories[i]].categories
  }
}

const moveToCart = (e) =>
{
  props.history.replace("/cart");
}

let thisPageCategories = [];

getpages();
showItemsFromPage(props.Category.page);
showCatalogs();

const rotateToCatalog = (e) =>
{
  console.log(e.currentTarget.id);
  props.history.replace("/category");
  props.rotate(parseInt(e.currentTarget.id));
}

//console.log(thisPage)
console.log('A',categ);
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
          <div className='title__cart' >
            <img src='cart.png' onClick={moveToCart}/>
          </div>
          <div className='title__cartInfo'>
          {count} предметов(а) | Итого: {price}
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
      <div className="pages">
      {
        pag.map(i=>{
          return <div className="pages__item" key={i} id={i} onClick={setPage}>{i}</div>
        })
      }
      </div>
    </div>

  );
}

export default Home;
