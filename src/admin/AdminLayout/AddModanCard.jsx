import { useState } from "react";

const AddModanCard = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    oldPrice: "",
    images: [""],
    brand: "",
    type: "",
    material: "",
    color: "",
    rating: "",
    reviews: "",
    description: "",
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
    // API call example:
    // await fetch("http://localhost:5000/products", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(finalData),
    // });
    alert("Product Added!");
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-black shadow-xl rounded-2xl">
      <h1 className="text-2xl font-bold mb-6">Add Modern Product</h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Name & Price */}
        <input
          name="name"
          placeholder="Product Name"
          value={product.name}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
        <input
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />

        {/* Old Price & Brand */}
        <input
          name="oldPrice"
          placeholder="Old Price"
          value={product.oldPrice}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
        <input
          name="brand"
          placeholder="Brand"
          value={product.brand}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />

        {/* Type & Material */}
        <input
          name="type"
          placeholder="Type"
          value={product.type}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
        <input
          name="material"
          placeholder="Material"
          value={product.material}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />

        {/* Color & Rating */}
        <input
          name="color"
          placeholder="Color"
          value={product.color}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
        <input
          name="rating"
          placeholder="Rating"
          value={product.rating}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />

        {/* Reviews */}
        <input
          name="reviews"
          placeholder="Reviews"
          value={product.reviews}
          onChange={handleChange}
          className="border p-2 rounded w-full md:col-span-2"
        />

        {/* Description */}
        <textarea
          name="description"
          placeholder="Description"
          value={product.description}
          onChange={handleChange}
          className="border p-2 rounded w-full md:col-span-2"
        />

        {/* Images */}
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

        {/* Submit */}
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

export default AddModanCard;