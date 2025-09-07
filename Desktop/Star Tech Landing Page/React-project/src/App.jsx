import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ProductList from "./components/ProductList";
import "./App.css";

export default function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  const handleRemoveFromCart = () => {
    setCartCount((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <div className="app">
      <header>
        <Navbar cartCount={cartCount} />
      </header>
      <main className="main">
        <aside>
          <Sidebar />
        </aside>
        <section>
          <ProductList onAddToCart={handleAddToCart} onRemoveFromCart={handleRemoveFromCart} />
          <ProductList onAddToCart={handleAddToCart} onRemoveFromCart={handleRemoveFromCart} />
        </section>
      </main>
    </div>
  );
}
