import React, { useState } from 'react';
import '../styles/styleHome.sass';

function CartComponent(props) {

  let cart = props.cart;

  console.log(cart);

  const returnTo = (e) => {
    props.history.replace('/home');
  }


  const increase = (e) => {
    let it = cart.find(i =>i.id === e.currentTarget.id);
    console.log(it);
    props.addToCart(it.id, it.name, it.price, it.image);

  //  props.history.replace('/home');
  }

  const decrease = (e) => {
//    props.history.replace('/home');
    props.removeFromCart(e.currentTarget.id);
  }

const remove = (e) => {
  console.log("REMOVE");
//    props.history.replace('/home');
  props.removeAllFromCart(e.currentTarget.id);
}
  return (
    <div>
      <div className='title'>
        <div className='title__left'>
          <div className='title__name'>
            <h2>Shop</h2>
          </div>

        </div>



      </div>

      <div className="cart">
        <div className="cart__return">
          <a onClick={returnTo}>Вернуться</a>
        </div>
        <div>
        {
          cart.map(i=>{
            return(
              <div  className="cart__item" key={i.id} id={i.id}>
                <div className="cart__item__left">
                    <div className="cart__item__name">
                      Название: {i.name}
                    </div>
                    <div className="cart__item__price">
                      Суммарная стоимость: {i.price * i.count}
                    </div>
                    <div className="cart__item__count">
                      Количество предметов: {i.count}
                    </div>
                    <div className="cart__item__changeAmount">
                      <div className="cart__item__plus" id={i.id} onClick={increase}>
                        +
                      </div>
                      <div className="cart__item__minus" id={i.id} onClick={decrease}>
                        -
                        </div>
                    </div>
                    <div className="cart__item__delete">
                      <img src="1.jpg" id={i.id} onClick={remove}/>
                    </div>
                  </div>
                  <div className="cart__item__right">
                    <div className="cart__item__image">
                      <img src={i.image}  />
                    </div>
                  </div>

              </div>
            )
          })
        }
        </div>
      </div>

    </div>
  );
}

export default CartComponent;
