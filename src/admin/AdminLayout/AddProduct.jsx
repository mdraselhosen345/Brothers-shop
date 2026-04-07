
// import { useState } from "react";

// const AddProduct = () => {
//   const [product, setProduct] = useState({ name:"", category:"", price:"", image:"", stock:"" });
//   const [message, setMessage] = useState("");

//   const handleChange = (e) => {
//     setProduct({...product, [e.target.name]: e.target.value});
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const res = await fetch("http://localhost:5000/products", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(product)
//     });
//     if(res.ok){
//       setMessage("Product Added!");
//       setProduct({ name:"", category:"", price:"", image:"", stock:"" });
//     }
//   };

//   return (
//     <div className="p-5 max-w-md mx-auto">
//       <h1 className="text-2xl mb-4">Add Product</h1>
//       {message && <p className="text-green-500">{message}</p>}
//       <form onSubmit={handleSubmit} className="space-y-3 text-black">
//         <input name="name" value={product.name} onChange={handleChange} placeholder="Name" className="border p-2 w-full" />
//         <input name="category" value={product.category} onChange={handleChange} placeholder="Category" className="border p-2 w-full" />
//         <input name="price" value={product.price} onChange={handleChange} placeholder="Price" className="border p-2 w-full" />
//         <input name="image" value={product.image} onChange={handleChange} placeholder="Image URL" className="border p-2 w-full" />
//         <input name="stock" value={product.stock} onChange={handleChange} placeholder="Stock" className="border p-2 w-full" />
//         <button className="bg-blue-500 text-black px-4 py-2 w-full">Add Product</button>
//       </form>
//     </div>
//   );
// };

// export default AddProduct;
import { useState } from "react";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    title: "",
    images: [""],
    description: "",
    brand: "",
    type: "",
    material: "",
    color: "",
    price: "",
    oldPrice: "",
    rating: "",
    reviews: "",
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleImageChange = (index, value) => {
    const newImages = [...product.images];
    newImages[index] = value;
    setProduct({ ...product, images: newImages });
  };

  const addImageField = () => {
    if (product.images.length >= 4) {
      alert("Maximum 4 images allowed!");
      return;
    }
    setProduct({ ...product, images: [...product.images, ""] });
  };

  const removeImageField = (index) => {
    const newImages = product.images.filter((_, i) => i !== index);
    setProduct({ ...product, images: newImages });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const finalData = {
      ...product,
      price: Number(product.price),
      oldPrice: Number(product.oldPrice),
      rating: Number(product.rating),
      reviews: Number(product.reviews),
    };
    console.log(finalData);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-black shadow rounded-xl">
      <h1 className="text-2xl font-bold mb-6">Add Electronic Accessories</h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Name & Title */}
        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />

        {/* Brand & Type */}
        <input
          name="brand"
          placeholder="Brand"
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />
        <input
          name="type"
          placeholder="Type"
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />

        {/* Material & Color */}
        <input
          name="material"
          placeholder="Material"
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />
        <input
          name="color"
          placeholder="Color"
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />

        {/* Price & Old Price */}
        <input
          name="price"
          placeholder="Price"
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />
        <input
          name="oldPrice"
          placeholder="Old Price"
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />

        {/* Rating & Reviews */}
        <input
          name="rating"
          placeholder="Rating"
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />
        <input
          name="reviews"
          placeholder="Reviews"
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />

        {/* Images (span full width) */}
        <div className="md:col-span-2">
          <p className="font-semibold mb-2">Images (Max 4)</p>
          {product.images.map((img, i) => (
            <div key={i} className="flex gap-2 mb-2">
              <input
                value={img}
                onChange={(e) => handleImageChange(i, e.target.value)}
                placeholder={`Image URL ${i + 1}`}
                className="border p-2 w-full rounded"
              />
              {product.images.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeImageField(i)}
                  className="bg-red-500 text-white px-2 rounded"
                >
                  ✕
                </button>
              )}
            </div>
          ))}
          {product.images.length < 4 && (
            <button
              type="button"
              onClick={addImageField}
              className="text-blue-600 text-sm"
            >
              + Add Image
            </button>
          )}
        </div>

        {/* Description (span full width) */}
        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
          className="border p-2 w-full rounded md:col-span-2"
        />

        {/* Submit Button (span full width) */}
        <button
          type="submit"
          className="bg-blue-600 text-white w-full py-2 rounded md:col-span-2 mt-2"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;