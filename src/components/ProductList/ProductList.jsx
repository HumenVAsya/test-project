import React from "react";
import './ProductList.css'

export function ProductList({ products, onRowClick }) {
  return (
    <tbody>
      {products.map((product) => (
        <tr
          key={product.id}
          onClick={() => onRowClick(product.id)}
          style={{ cursor: "pointer" }}
        >
          <td>{product.id}</td>
          <td>{product.category}</td>
          <td>{product.itemId}</td>
          <td>{product.name}</td>
          <td>{product.fullPrice}</td>
          <td>{product.price}</td>
          <td>{product.screen}</td>
          <td>{product.capacity}</td>
          <td>{product.color}</td>
          <td>{product.ram}</td>
          <td>{product.year}</td>
        </tr>
      ))}
    </tbody>
  );
}