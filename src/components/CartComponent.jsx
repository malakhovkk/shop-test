import React, { useState } from 'react';
import '../styles/styleHome.sass';
import CartItem from '../components/CartItem.jsx';
function CartComponent(props) {

  let cart = props.cart;

  console.log(cart);

  const returnTo = () => {
    props.history.replace('/home');
  }


  const increase = (id) => {
    let it = cart.find(i =>i.id === id);
    console.log(it);
    props.addToCart(it.id, it.name, it.price, it.image);

  //  props.history.replace('/home');
  }

  const decrease = (id) => {
//    props.history.replace('/home');
    props.removeFromCart(id);
  }

const remove = (id) => {
  console.log("REMOVE");
//    props.history.replace('/home');
  props.removeAllFromCart(id);
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
              <CartItem id={i.id} name={i.name} price={i.price} count={i.count} increase={increase} decrease={decrease} remove={remove} image={i.image}/>
            )
          })
        }
        </div>
      </div>

    </div>
  );
}

export default CartComponent;
