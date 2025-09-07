import React from "react";

export default function ProductCard({ product, onAddToCart, onRemoveFromCart }) {
  return (
    <div className="card">
      {product.save && <span className="save-badge">Save: {product.save}</span>}
      <div className="card-img-container">
        <img
          src={product.image}
          alt={product.title}
          className="card-img"
        />
      </div>
      <h3 className="card-title">{product.title}</h3>
      <div className="card-prices">
        <span className="price">{product.price}</span>
        {product.oldPrice && <span className="old-price">{product.oldPrice}</span>}
      </div>
      <ul className="card-features">
        {product.features.map((f, idx) => 
          <li key={idx}>• {f}</li>
        )}
      </ul>
      <div style={{ display: "flex", gap: "0.5rem", width: "100%", justifyContent: "center" }}>
        <button className="btn buy-btn">Buy Now</button>
        <button className="btn add-cart-btn" onClick={onAddToCart}>
          Add to Cart
        </button>
      </div>
      <div style={{ marginTop: "0.7rem", width: "100%", display: "flex", justifyContent: "center" }}>
        <button className="btn remove-cart-btn" onClick={onRemoveFromCart}>
          Remove from Cart
        </button>
      </div>
    </div>
  );
}
