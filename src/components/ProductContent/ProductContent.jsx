import React, { useEffect, useState } from "react";
import {
  AiOutlinePlus,
  AiOutlineMinus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import "./ProductContent.css";

const ProductContent = () => {
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/products", { signal })
      .then((res) => res.json())
      .then((data) => {
        setProductData(data.products);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });

    return () => {
      console.log("Cleaning Up");
      controller.abort();
    };
  }, []);

  return (
    <div className="mt-36">
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img
              src="image1.jpg"
              className="product-detail-image"
              alt="Product"
            />
          </div>
          <div className="small-images-container"></div>
        </div>
        <div className="product-detail-desc">
          {productData && (
            <>
              <h1>{productData.title}</h1>
              <div className="reviews">
                <div>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiOutlineStar />
                </div>
                <p>(20)</p>
              </div>
              <h4>Details:</h4>
              <p>{productData.description}</p>
              <p className="price">{productData.price}</p>
              <div className="quantity">
                <h3>Quantity: {productData.stock}</h3>
                <p className="quantity-desc">
                  <span className="minus">
                    <AiOutlineMinus />
                  </span>
                  <span className="num">{123}</span>
                  <span className="plus">
                    <AiOutlinePlus />
                  </span>
                </p>
              </div>
              <div className="buttons">
                <button type="button" className="add-to-cart">
                  Add to Cart
                </button>
                <button type="button" className="buy-now">
                  Buy Now
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductContent;
