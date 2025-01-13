import Image from 'next/image';

const TrendingPage = () => {
  // Sample data for Trending Now and New Arrivals sections
//   const trendingProducts = [
//     { name: 'Emerald Necklace', image: '/images/emerald-necklace.jpg', price: '$399', description: 'A vibrant emerald necklace.' },
//     { name: 'Sapphire Ring', image: '/images/sapphire-ring.jpg', price: '$499', description: 'A luxurious sapphire ring.' },
//     { name: 'Pearl Earrings', image: '/images/pearl-earrings.jpg', price: '$249', description: 'Classic pearl earrings.' },
//   ];

  const newArrivals = [
    { name: 'Rose Gold Bracelet', image: 'https://img.freepik.com/free-photo/transparent-box-golden-crown-close-up_23-2148333534.jpg?ga=GA1.1.686101460.1735278394&semt=ais_hybrid', price: '$299', description: 'Trendy rose gold bracelet.' },
    { name: 'Diamond Studs', image: 'https://images.pexels.com/photos/10976654/pexels-photo-10976654.jpeg?auto=compress&cs=tinysrgb&w=800', price: '$799', description: 'Elegant diamond stud earrings.' },
    { name: 'Ruby Pendant', image: 'https://images.pexels.com/photos/15684182/pexels-photo-15684182/free-photo-of-a-silver-necklace-with-a-heart-shaped-pendant.jpeg?auto=compress&cs=tinysrgb&w=800', price: '$599', description: 'A striking ruby pendant.' },
  ];

  return (
    <div className="bg-gray-50">
      {/* Trending Now Section */}
      {/* <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Trending Now</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
            {trendingProducts.map((product, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-xl border border-gray-300 bg-white"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800">{product.name}</h3>
                  <p className="text-gray-600 mt-2">{product.description}</p>
                  <p className="text-lg mt-2 text-gray-900">{product.price}</p>
                  <button className="mt-4 px-6 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* New Arrivals Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">New Arrivals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
            {newArrivals.map((product, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-xl border border-gray-300 bg-white"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800">{product.name}</h3>
                  <p className="text-gray-600 mt-2">{product.description}</p>
                  <p className="text-lg mt-2 text-gray-900">{product.price}</p>
                  <button className="mt-4 px-6 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrendingPage;
