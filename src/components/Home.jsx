import React, { useState } from 'react';
import '../styles/styleHome.sass';
import CategoryItem from '../containers/CategoryItem.js';
import RotateItem from '../components/RotateItem.jsx';
import PageItem from '../components/PageItem.jsx';
import GalleryItem from '../components/GalleryItem.jsx';
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

const setPage  = (page) =>{
  props.setPage(page);
}



const addToCart  = (id) =>{
  let t = state.find(i => i.id === parseInt(id));
  console.log("TTTT",t);
  props.addToCart(id, t.itemName, t.price, t.image);
}


let thisPage = [];
function showItemsFromPage(page)
{
  for(let i = (page-1)*12; i <= (page-1)*12 + 11 && i <items.length; i++ )
  {
    console.log(i);
    thisPage.push(
      <GalleryItem id={items[i].id} image={items[i].image} price={items[i].price} itemName={items[i].itemName} addToCart={addToCart}/>
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

const rotateToCatalog = (id) =>
{
  //console.log(e.currentTarget.id);
  props.history.replace("/category");
  props.rotate(parseInt(id));
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
            return(<RotateItem  id={id} rotateToCatalog={rotateToCatalog} key={id} i={i}/>);
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
          return <PageItem i={i} setPage={setPage}/>
        })
      }
      </div>
    </div>

  );
}

export default Home;
