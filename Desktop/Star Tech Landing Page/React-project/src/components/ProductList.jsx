import React from "react";
import ProductCard from "./ProductCard";

const products = [
	{
		id: 1,
		title: "Starlink Mini Kit",
		price: "26,500৳",
		oldPrice: "36,499৳",
		save: "9,999৳",
		image: "https://www.startech.com.bd/image/cache/catalog/starlink/starlink-mini/starlink-mini-228x228.webp", // Example image URL
		features: [
			"Antenna: Electronic Phased Array",
			"Frequency: Dual Band 3 x 3 MU-MIMO, Wi-Fi 5",
			"Coverage: Up to 112m², Connect up to 128 Devices",
			"Ethernet Ports: 1x Latching Ethernet LAN port",
		],
	},
	{
		id: 2,
		title: "Starlink Standard Kit",
		price: "49,500৳",
		oldPrice: "60,999৳",
		save: "11,499৳",
		image: "https://www.startech.com.bd/image/cache/catalog/starlink/starlink-standard/starlink-standard-001-228x228.webp", // Example image URL
		features: [
			"Antenna: Electronic Phased Array",
			"Frequency: Tri-Band 4 x 4 MU-MIMO, Wi-Fi 6",
			"Coverage: Up to 297 m², Connect up to 235 Devices",
			"Ethernet Ports: 2x Latching LAN ports",
		],
	},
	{
		id: 3,
		title: "Starlink Flat High Performance Kit",
		price: "185,000৳",
		oldPrice: "189,000৳",
		save: "4,000৳",
		image: "https://www.startech.com.bd/image/cache/catalog/starlink/starlink-flat-high-performance/starlink-flat-high-performance-001-228x228.webp", // Example image URL
		features: [
			"Antenna: Electronic Phased Array",
			"Frequency: Dual Band 3 x 3 MIMO, Wi-Fi 5",
			"Mesh Compatibility: Compatible with 12 Starlink Nodes",
			"Weather-Resistant, Rating: IP56",
		],
	},
	{
		id: 4,
		title: "Starlink Mini 15 Meter DC Power Cable",
		price: "Up Coming",
		oldPrice: "",
		save: "",
		image: "https://www.startech.com.bd/image/cache/catalog/starlink/cable/starlink-mini-15-meter-dc-power-cable/starlink-mini-15-meter-dc-power-cable-01-228x228.webp", // Example image URL
		features: [
			"Type: Power Cable",
			"Length: 15m",
			"Compatibility: Starlink Mini",
			"Color: Black",
		],
	},
];

export default function ProductList({ onAddToCart, onRemoveFromCart }) {
	return (
		<div className="product-list">
			{products.map((product, idx) => (
				<ProductCard
					key={idx}
					product={product}
					onAddToCart={onAddToCart}
					onRemoveFromCart={onRemoveFromCart}
				/>
			))}
		</div>
	);
}
