import React from "react";
import "./Product.css"; // Import CSS file

const Product = () => {
  return (
    <div className="container">
      {/* Header Section */}
      <div className="header">
        <p className="breadcrumb">Dashboard / Products</p>
        <h1 className="title">Products</h1>
        <div className="button-group">
          <button className="active-button">Active</button>
          <button className="inactive-button">Inactive</button>
          <button className="all-button">All</button>
        </div>
      </div>

      {/* Product Table */}
      <table className="product-table">
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>Product</th>
            <th>Tags</th>
            <th>NYC Outlet</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Low</th>
          </tr>
        </thead>
        <tbody>
          {[
            { id: 1, name: "Printed Cotton Jacket", tags: ["Unisex", "Bag"], var: 3, price: "$45.00", stock: 999, low: 500 },
            { id: 2, name: "Blue Faux Leather", tags: ["Unisex", "Bag"], var: 3, price: "$45.00", stock: 999, low: 500 },
            { id: 3, name: "Tribal Waterfall Vest", tags: ["Unisex", "Bag"], var: 3, price: "$45.00", stock: 999, low: 500 },
            { id: 4, name: "Braver Bomber Jacket", tags: ["Unisex", "Bag"], var: 3, price: "$45.00", stock: 999, low: 500 },
            { id: 5, name: "Olive Drape Vest", tags: ["Unisex", "Bag"], var: 3, price: "$45.00", stock: 999, low: 500 },
            { id: 6, name: "Black Denim Jacket", tags: ["Unisex", "Bag"], var: 3, price: "$45.00", stock: 999, low: 500 },
            { id: 7, name: "Army Green Jacket", tags: ["Unisex", "Bag"], var: 3, price: "$45.00", stock: 999, low: 500 },
          ].map((product) => (
            <tr key={product.id}>
              <td><input type="checkbox" /></td>
              <td>{product.name}</td>
              <td>
                {product.tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </td>
              <td>{product.var}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
              <td>{product.low}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Product;
