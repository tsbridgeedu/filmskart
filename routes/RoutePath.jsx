import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Routers from "./Router";

const RoutePath = () => {
  const VITE_INVENTORY_URL = import.meta.env.VITE_INVENTORY_URL;
  const VITE_STORE_ID = import.meta.env.VITE_STORE_ID;
  const { id } = useParams();
  const [product, setProduct] = useState(null); // Initialize as null
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${VITE_INVENTORY_URL}${VITE_STORE_ID}/products/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const [cartItems, setCartItems] = useState(() => {
    // Retrieve cart items from local storage or default to an empty array
    const storedCartItems = localStorage.getItem("cartItems");
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });

  useEffect(() => {
    // Save cart items to local storage whenever it changes
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddProduct = (product, quantity) => {
    const productIndex = cartItems.findIndex((item) => item.id === product.id);
    if (productIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[productIndex] = {
        ...updatedCartItems[productIndex],
        quantity: updatedCartItems[productIndex].quantity + quantity,
      };
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: quantity }]);
    }
  };
  const handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
            : item
        )
      );
    }
  };

  const handleCartClearance = () => {
    setCartItems([]);
  };

  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

  return (
    <div>
      <Routers
        product={product}
        amount={totalPrice}
        cartItems={cartItems}
        handleAddProduct={handleAddProduct}
        handleRemoveProduct={handleRemoveProduct}
        handleCartClearance={handleCartClearance}
      />
    </div>
  );
};

export default RoutePath;
