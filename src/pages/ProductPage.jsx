import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchProducts } from "../services/productService";
import { ProductList } from "../components/ProductList/ProductList";
import { Sort } from "../components/Sort/Sort";

export function ProductPage() {
  const [products, setProducts] = useState([]);
  const [originalProducts, setOriginalProducts] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await fetchProducts();
        setProducts(products);
        setOriginalProducts(products);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchData();
  }, []);

  const handleRowClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <main className="table">
      <h1>Products</h1>
      <section className="table__header" style={{ display: 'flex' }}>
        <Sort products={products} setProducts={setProducts} originalProducts={originalProducts} />
      </section>
      <section className="table__body">
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>category</th>
              <th>itemId</th>
              <th>name</th>
              <th>fullPrice</th>
              <th>price</th>
              <th>screen</th>
              <th>capacity</th>
              <th>color</th>
              <th>ram</th>
              <th>year</th>
            </tr>
          </thead>
          <ProductList products={products} onRowClick={handleRowClick} />
        </table>
      </section>
    </main>
  );
}