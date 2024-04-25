import React from 'react'
import { NavLink } from 'react-router-dom'
import './addtocart.css'

const AddtoCartContent = () => {
  return (
    <div className='AddtoCart'>
       <div className='AddtoCart-innerbox-1'>
        <div className='AddtoCart-rows'>
          <div className='item-info'><h2>Product</h2></div>
          <div className='item-info'><h2>Price</h2></div>
          <div className='item-info'><h2>Quantity</h2></div>
          <div className='item-info'><h2>Subtotal</h2></div>
        </div>
        <div className='AddtoCart-rows'>
          <div className='item-info'><p>Lcd Monitor</p></div>
          <div className='item-info'><p>$650</p></div>
          <div className='item-info'><p>1</p></div>
          <div className='item-info'><p>$650</p></div>
        </div>
        <div className='AddtoCart-rows'>
          <div className='item-info'><p>Lcd Monitor</p></div>
          <div className='item-info'><p>$650</p></div>
          <div className='item-info'><p>1</p></div>
          <div className='item-info'><p>$650</p></div>
        </div>

        <div className='AddtoCart-rows'>
          <button>Return to Shop</button>
          <button>Update Cart</button>
        </div>
       </div>
       <div className='AddtoCart-innerbox-2'>
        <div className='AddtoCart-couponcode'>
          <input placeholder='Coupon Code'></input>
          <button>Apply Coupon</button>
        </div>
        <div className='AddtoCart-cart-total'>
          <h2>Cart Total</h2>
          <div className='AddtoCart-cart-total-details'>
            <p>Subtotal:</p>
            <p>$1750</p>
          </div>
          <hr></hr>
          <div className='AddtoCart-cart-total-details'>
            <p>Shipping:</p>
            <p>Free</p>
          </div>
          <hr></hr>
          <div className='AddtoCart-cart-total-details'>
            <p>Total:</p>
            <p>$1750</p>
          </div>
          <button>Process to checkout</button>
        </div>
       </div>
    </div>
  )
}

export default AddtoCartContent
