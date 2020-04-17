import React, { useState } from 'react';
import '../styles/styleHome.sass';

function CategoryItem(props) {


let  {id, image,category, num, setCategory} = props;
//  id = props.id;
//  image = props.image;
// category = props.category;
//  image = props.image;
//  const setCategory = () => {

  //  let id = e.currentTarget.id;
//  let id = e.currentTarget.id;
//    props.pushToCategories(parseInt(num));

//    console.log(props);
//    props.history.replace("/home");
 //}

  return (
    <div className="gallery__item"  key={id}>
      <div className="gallery__item__block">
        <div className="gallery__item__left">
          <div className="gallery__item__image"><img src={image}/></div>
        </div>
        <div className="gallery__item__right">
          <div className="gallery__item__name">{category}</div>
        </div>
      </div>
      <div className="gallery__item__cart">
        <div className="gallery__item__cart__content" onClick={() => setCategory(num)} >
          <a className="cart" >Перейти</a>
        </div>
      </div>
    </div>
  );
}

export default CategoryItem;
