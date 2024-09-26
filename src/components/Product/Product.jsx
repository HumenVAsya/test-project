import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../../services/productService";
import './Product.css'


export const Product = () => {
  const { productId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await fetchProducts();
        setProducts(products);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchData();
  }, []);

  const product = products.find((p) => p.id === parseInt(productId, 10));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-detail">
  <h1>{product.name}</h1>
  <p className="category">Category: <strong>{product.category}</strong></p>
  <p>Item ID: <strong>{product.itemId}</strong></p>
  <p className="price">Full Price: <strong>${product.fullPrice}</strong></p>
  <p className="price">Price: <strong>${product.price}</strong></p>
  <p>Screen: <strong>{product.screen}</strong></p>
  <p>Capacity: <strong>{product.capacity}</strong></p>
  <p>Color: <strong>{product.color}</strong></p>
  <p>RAM: <strong>{product.ram}</strong></p>
  <p>Year: <strong>{product.year}</strong></p>
</div>
  );
};
