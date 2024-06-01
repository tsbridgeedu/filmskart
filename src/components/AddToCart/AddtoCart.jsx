import React, { useState } from "react";
import "./cart.css";
import { Scrollbars } from "react-custom-scrollbars-2";
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
const Cart=({ cartItems, handleAddProduct, handleRemoveProduct, handleCartClearance })=> {
  Cart.propTypes = {
    cartItems: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
      images: PropTypes.shape({
        url: PropTypes.string.isRequired
      }).isRequired
    })).isRequired,
    handleAddProduct: PropTypes.func.isRequired,
    handleRemoveProduct: PropTypes.func.isRequired,
    handleCartClearance: PropTypes.func.isRequired
  };

  const history = useNavigate();
  const handleCheckout = () => {
   

      history("/paymentsuccess");
    } 

   

  const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0);

  return (
    <>
      <div className="carts">
        <section className="main-cart-section">
          <h1>shopping Cart</h1>
          <p className="total-items">
            you have <span className="total-items-count"> {cartItems.length === 0 ? "no" : cartItems.length} </span> items
            in shopping cart
          </p>
          <div className='cart-items'>
            <div className="cart-items-container">
              <Scrollbars>
                {cartItems.length === 0 && (<div className="cart-items-empty">Cart is Empty</div>)}
                <div>
                  {
                    cartItems.map((item) => (
                      <div key={item.id} className="items-info">
                        <div className="product-img">
                          <img className='cart-items-image' src={item.images[0].url} alt={item.name} />
                        </div>
                        <div className="title text-black">{item.name}</div>
                        <div className="add-minus-quantity">
                          <i className="fas fa-minus minus" onClick={() => handleRemoveProduct(item)}></i>
                          <input type="text" placeholder={item.quantity} disabled />
                          <i className="fas fa-plus add" onClick={() => handleAddProduct(item)}></i>


                        </div>
                        <div className="price">{item.quantity} * ₹{item.price}</div>
                      </div>
                    ))}
                </div>
              </Scrollbars>
            </div>
          </div>
          <div className="card-total">
            <h3>
              Cart Total : <span>₹{totalPrice}</span>
            </h3>
            <button onClick={handleCheckout}>checkout</button>
            {cartItems.length >= 1 && <button className="clear-cart" onClick={handleCartClearance}>Clear Cart</button>}
          </div>

        </section>
      </div>
    </>

  )
}

export default Cart