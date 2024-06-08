import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Routers from "./Router";

const RoutePath = () => {
  const VITE_INVENTORY_URL = import.meta.env.VITE_INVENTORY_URL;
  const VITE_STORE_ID = import.meta.env.VITE_STORE_ID;

  const fetchProductById = async (product_id) => {
    try{
      const response = await axios.get(
        `${VITE_INVENTORY_URL}${VITE_STORE_ID}/products/${product_id}`
      );      
      return await response.data;      
    }catch(error){
      console.error("Error fetching product:", error);
    }
  }

  const [cartItems, setCartItems] = useState(() => {
    // Retrieve cart items from local storage or default to an empty array
    const storedCartItems = localStorage.getItem("cartItems");
    return storedCartItems ? JSON.parse(storedCartItems) : {};
  });

  useMemo(() => {
    // Save cart items to local storage whenever it changes
    console.log("cartItems have changed !!!", cartItems)
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddProduct = (product_id, quantity) => {
    if(cartItems[product_id] === undefined){
      setCartItems((prev_cartItem)=> { return {...prev_cartItem, [product_id]: quantity}});
    }else{
      setCartItems((prev_cartItem)=> { return {...prev_cartItem, [product_id]: (prev_cartItem[product_id]+quantity)}});
    }
  };

  const handleRemoveProduct = (product_id) => {
    if (cartItems[product_id] === undefined){ return;}
    else if(cartItems[product_id] <= 1){
      const newCartItems = {...cartItems};
      delete newCartItems[product_id];
      setCartItems(newCartItems);
    }
    else{
      setCartItems((prev_cartItem)=> { return {...prev_cartItem, [product_id]: (prev_cartItem[product_id]-1)}});
    }
  };

  const handleCartClearance = () => {
    setCartItems({});
  };

  return (
    <div>
      <Routers
        cartItems={cartItems}
        fetchProductById={fetchProductById}
        handleAddProduct={handleAddProduct}
        handleRemoveProduct={handleRemoveProduct}
        handleCartClearance={handleCartClearance}
      />
    </div>
  );
};

export default RoutePath;
