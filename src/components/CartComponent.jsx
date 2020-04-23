import React, { useState } from 'react';
import '../styles/styleHome.sass';
import CartItem from './CartItem.jsx';

function CartComponent(props) {
  const { cart } = props;


  const returnTo = () => {
    props.history.replace('/home');
  };


  const increase = (id) => {
    const it = cart.find((i) => i.id === id);
    props.addToCart(it.id, it.name, it.price, it.image);
  };

  const decrease = (id) => {
    props.removeFromCart(id);
  };

  const remove = (id) => {
    props.removeAllFromCart(id);
  };
  return (
    <div>
      <div className="title">
        <div className="title__left">
          <div className="title__name">
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
          cart.map((i) => (
            <CartItem id={i.id} name={i.name} price={i.price} count={i.count} increase={increase} decrease={decrease} remove={remove} image={i.image} />
          ))
        }
        </div>
      </div>

    </div>
  );
}

export default CartComponent;
