import React, { useState } from 'react';
import '../styles/styleHome.sass';

function CartItem({id,name,price,count,increase,decrease,remove,image}) {


return( <div  className="cart__item" key={id} >
  <div className="cart__item__left">
      <div className="cart__item__name">
        Название: {name}
      </div>
      <div className="cart__item__price">
        Суммарная стоимость: {price * count}
      </div>
      <div className="cart__item__count">
        Количество предметов: {count}
      </div>
      <div className="cart__item__changeAmount">
        <div className="cart__item__plus"  onClick={() => increase(id)}>
          +
        </div>
        <div className="cart__item__minus" onClick={() => decrease(id)}>
          -
          </div>
      </div>
      <div className="cart__item__delete">
        <img src="1.jpg"  onClick={() => remove(id)}/>
      </div>
    </div>
    <div className="cart__item__right">
      <div className="cart__item__image">
        <img src={image}  />
      </div>
    </div>

</div>);
}

export default CartItem;
