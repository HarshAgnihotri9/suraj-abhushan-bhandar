import React from "react";

const Jewelry = () => {
  const jewelryCategories = [
    {
      name: "Rings",
      image: "https://img.freepik.com/free-photo/beautiful-engagement-ring-with-diamonds_23-2149509264.jpg?ga=GA1.1.686101460.1735278394&semt=ais_hybrid",
      description: "Timeless and elegant rings designed to perfection.",
    },
    {
      name: "Necklaces",
      image: "https://img.freepik.com/free-photo/bust-showcase-jewelry-display-necklace-pendant-jewelry-lifestyle-fashion-accessories-mockup_460848-14343.jpg?ga=GA1.1.686101460.1735278394&semt=ais_hybrid",
      description: "Statement necklaces for unforgettable moments.",
    },
    {
      name: "Bracelets",
      image: "https://img.freepik.com/free-photo/beautiful-young-woman-wearing-sari_23-2149502988.jpg?ga=GA1.1.686101460.1735278394&semt=ais_hybrid",
      description: "Sophisticated bracelets to enhance your charm.",
    },
    {
      name: "Earrings",
      image: "https://img.freepik.com/free-photo/aesthetic-golden-earrings-high-angle_23-2149846562.jpg?ga=GA1.1.686101460.1735278394&semt=ais_hybrid",
      description: "Dazzling earrings that complete any look.",
    },
    {
      name: "Pendants",
      image: "https://img.freepik.com/free-photo/bust-showcase-jewelry-display-necklace-pendant-jewelry-lifestyle-fashion-accessories-mockup_460848-14340.jpg?ga=GA1.1.686101460.1735278394&semt=ais_hybrid",
      description: "Enchanting pendants for every occasion.",
    },
    {
      name: "Bangles",
      image: "https://img.freepik.com/free-photo/young-indian-woman-wearing-sari_23-2149400884.jpg?ga=GA1.1.686101460.1735278394&semt=ais_hybrid",
      description: "Beautifully crafted bangles to suit your style.",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <header className="text-center py-16">
        <h1 className="text-5xl font-bold tracking-tight text-gray-900">
          Discover Exquisite Jewelry
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          Handcrafted pieces that redefine elegance and style.
        </p>
      </header>

      {/* Jewelry Categories Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-semibold text-center mb-12 text-gray-800">
            Our Collection
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {jewelryCategories.map((category, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-md border border-gray-200 bg-white"
              >
                {/* Image */}
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 mt-2">{category.description}</p>
                  <button className="mt-4 px-6 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all">
                    Explore {category.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Suraj Abhushan Bhandar. All Rights
            Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Jewelry;
