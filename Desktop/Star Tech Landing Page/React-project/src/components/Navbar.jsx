import React from "react";

export default function Navbar({ cartCount}) {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <span className="logo" role="img" aria-label="star">
                    <img src="https://www.startech.com.bd/image/catalog/logo.png" alt="" />
                </span>
                {/* <h1 className="logo-text">Star Tech</h1> */}
            </div>
            <div className="navbar-center">
                <input
                    type="text"
                    placeholder="🔍   Search for products, brands, categories..."
                    className="search"
                />
            </div>
            <div className="navbar-right nav-links">
                <button className="nav-btn">
                    <span role="img" aria-label="offers"></span> Offers
                </button>
                <button className="nav-btn">
                    <span role="img" aria-label="happy hour"></span> Happy Hour
                </button>
                <button className="nav-btn">
                    <span role="img" aria-label="account">👤</span> Account
                </button>
                <button className="nav-btn pc-builder">
                    <span role="img" aria-label="pc builder">🛠️</span> PC Builder
                </button>
                <div className="cart-indicator">
                    <span role="img" aria-label="cart">🛒</span>
                    <span className="cart-count">{cartCount}</span>
                </div>
            </div>
        </nav>
    );
}
