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

  return (
    <div>
      <Routers
        fetchProductById={fetchProductById}
      />
    </div>
  );
};

export default RoutePath;
