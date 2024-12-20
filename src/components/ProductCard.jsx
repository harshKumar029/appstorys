import React from "react";

// ProductCard Component
const ProductCard = ({ product }) => {
  return (
<div className="max-w-xs rounded overflow-hidden shadow-lg bg-white m-4 flex flex-col h-full">
  {/* Product Image */}
  <img
    className="w-full object-cover"
    src={product.image}
    alt={product.name}
  />

  {/* Product Details */}
  <div className="p-4 flex flex-col justify-end mt-auto">
    <h2 className="text-lg font-bold">{product.name}</h2>
    <p className="text-gray-600 mt-2">₹{product.price}</p>
  </div>
</div>

  );
};

export default ProductCard;