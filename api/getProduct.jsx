import axios from "axios";
import { useState } from "react";

const getProduct = async () => {
  const VITE_INVENTORY_URL = import.meta.env.VITE_INVENTORY_URL;
  const VITE_STORE_ID = import.meta.env.VITE_STORE_ID;

 

  var productList;

  
  await new Promise((resolve) => setTimeout(resolve, 2800));
  await axios
    .get(`${VITE_INVENTORY_URL}${VITE_STORE_ID}/products`)
    .then((productList) => {
      console.log(item.data);
      productList.data;
    })
    

  return productList;
  
};

export default getProduct;
