import React, { useState } from "react";
import "./cart.css";
import { Scrollbars } from "react-custom-scrollbars-2";
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import CartItems from "./CartItems";

const Cart=({ cartItems, handleAddProduct, handleRemoveProduct, handleCartClearance, fetchProductById })=> {
  // Cart.propTypes = {
  //   cartItems: PropTypes.arrayOf(PropTypes.shape({
  //     id: PropTypes.string.isRequired,
  //     name: PropTypes.string.isRequired,
  //     price: PropTypes.number.isRequired,
  //     quantity: PropTypes.number.isRequired,
  //     images: PropTypes.shape({
  //       url: PropTypes.string.isRequired
  //     }).isRequired
  //   })).isRequired,
  //   handleAddProduct: PropTypes.func.isRequired,
  //   handleRemoveProduct: PropTypes.func.isRequired,
  //   handleCartClearance: PropTypes.func.isRequired
  // };

  const history = useNavigate();
  const handleCheckout = () => {
   

      history("/paymentsuccess");
    } 

   
  const cartItemsId = Object.keys(cartItems);
  const totalPrice = 0; // cartItems.reduce((price, item) => price + item.quantity * item.price, 0);

  return (
    <>
      <div className="carts">
        <section className="main-cart-section">
          <h1>shopping Cart</h1>
          <p className="total-items">
            you have <span className="total-items-count"> {cartItemsId.length === 0 ? "no" : cartItemsId.length} </span> items
            in shopping cart
          </p>
          <div className='cart-items'>
            <div className="cart-items-container">
              <Scrollbars>
                {cartItemsId.length === 0 && (<div className="cart-items-empty">Cart is Empty</div>)}
                <div>
                  {
                    cartItemsId.map((item_id) => {
                      return(
                          <CartItems 
                            key={item_id}
                            handleAddProduct={handleAddProduct} 
                            handleRemoveProduct = {handleRemoveProduct }
                            fetchProductById = {fetchProductById}
                            item_id = {item_id} 
                            quantity = {cartItems[item_id]}
                          />
                      )
                    })
                  }
                </div>
              </Scrollbars>
            </div>
          </div>
          <div className="card-total">
            <h3>
              Cart Total : <span>₹{totalPrice}</span>
            </h3>
            <button onClick={handleCheckout}>checkout</button>
            {cartItemsId.length >= 1 && <button className="clear-cart" onClick={handleCartClearance}>Clear Cart</button>}
          </div>

        </section>
      </div>
    </>

  )
}

export default Cart