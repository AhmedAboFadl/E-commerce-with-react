import { useEffect, useState } from "react";
import Card from "./Product";

function ProductsList() {
  const api_url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [visibleCount, setVisibleCount] = useState(9); // Number of products displayed
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(api_url);
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
        const uniqueCategories = [...new Set(data.map(product => product.category))];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Filter products by category

  useEffect(() => {
    if (selectedCategory) {
      setFilteredProducts(products.filter(product => product.category === selectedCategory));
      setVisibleCount(9); // Reset visible count when category changes
    } else {
      setFilteredProducts(products);
    }
  }, [selectedCategory, products]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const displayedProducts = filteredProducts.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 9); // Increase by 9
  };

  return (
    <>
      <h2 className="relative left-[42%] text-[24px] font-serif font-semibold mt-5 wow animate__animated animate__zoomIn```">
        __our products___
      </h2>

      <div className="mb-4 ml-[400px] mt-[60px] wow animate__animated animate__zoomIn">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryClick(cat)}
            className="mr-2 mb-2 px-4 py-2 text-white bg-orange-400 rounded-[10px] hover:bg-blue-500 transition"
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="flex justify-center wow animate__animated animate__zoomIn">
        <div className="container w-full p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ml-[100px] gap-4">
            {displayedProducts.map((product) => (
              <Card key={product.id} product={product} />
            ))}

          </div>
          {displayedProducts.length < filteredProducts.length && (
            <div className="text-center mt-4">
              <button
                onClick={handleLoadMore}
                className="bg-blue-600 text-white rounded-[4px] py-2 px-4 hover:bg-blue-500 transition"
                disabled={displayedProducts.length >= filteredProducts.length}
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ProductsList;
