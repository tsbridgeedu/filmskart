// import axios from "axios";
// import { createContext, useContext, useEffect, useState } from "react";

// const ProductContext = createContext();

// const ProductProvider = ({ children }) => {
//   const VITE_INVENTORY_URL = import.meta.env.VITE_INVENTORY_URL;
//   const VITE_STORE_ID = import.meta.env.VITE_STORE_ID;

//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   useEffect(() => {
//     setLoading(true);
//     async function getProducts() {
//       await axios
//         .get(`${VITE_INVENTORY_URL}${VITE_STORE_ID}/products`)
//         .then((item) => setProducts(item.data));
//       setLoading(false);
//     }

//     getProducts();
//   }, [products]);

//   return (
//     <ProductContext.Provider value={products}>
//       {children}
//     </ProductContext.Provider>
//   );
// };

// const useProductContext = () => {
//   return useContext(ProductProvider);
// };

// export { ProductProvider, useProductContext };
