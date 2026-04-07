import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
     <div className="p-6 bg-gray-100 min-h-screen">
  <h1 className="text-3xl font-bold mb-6 text-gray-800">Products</h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {products.map((p) => (
      <div
        key={p.id}
        className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
      >
        {/* Image */}
        <img
          src={p.image}
          alt={p.name}
          className="w-full h-48 object-cover"
        />

        {/* Content */}
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800">
            {p.name}
          </h2>

          <p className="text-sm text-gray-500 mb-1">
            Category: {p.category}
          </p>

          <p className="text-green-600 font-bold text-md">
            ৳ {p.price}
          </p>

          {/* Stock */}
          <p
            className={`text-sm mt-1 font-medium ${
              p.stock > 0 ? "text-green-600" : "text-red-500"
            }`}
          >
            {p.stock > 0
              ? `In Stock (${p.stock})`
              : "Out of Stock"}
          </p>

          {/* Button */}
          <button
            disabled={p.stock === 0}
            className={`mt-3 w-full py-2 rounded-lg text-white font-medium transition ${
              p.stock > 0
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            {p.stock > 0 ? "Add to Cart" : "Unavailable"}
          </button>
        </div>
      </div>
    ))}
  </div>
</div>
  );
};

export default Products;