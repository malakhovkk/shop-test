import React, { useState } from 'react';
import '../styles/styleHome.sass';

function GalleryItem({id,image,price,itemName,addToCart}) {


return(   <div className="gallery__item" key={id}>
    <div className="gallery__item__block">
      <div className="gallery__item__left">
        <div className="gallery__item__image"><img src={image}/></div>
      </div>
      <div className="gallery__item__right">
        <div className="gallery__item__price">{price}</div>
        <div className="gallery__item__name">{itemName}</div>
      </div>
    </div>
    <div className="gallery__item__cart">
      <div className="gallery__item__cart__content">
        <a className="cart" onClick={() => addToCart(id)}>В корзину</a>
      </div>
    </div>
  </div>);
}

export default GalleryItem;
