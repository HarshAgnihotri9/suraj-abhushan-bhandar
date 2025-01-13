import { useEffect, useState, useRef } from 'react';
import Image from 'next/image'; // Import Next.js Image component
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger

const Jewelry = () => {
  const [isMounted, setIsMounted] = useState(false); // Hydration fix
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const jewelryCategories = [
    {
      name: 'Rings',
      image: 'https://img.freepik.com/free-photo/beautiful-engagement-ring-with-diamonds_23-2149509264.jpg?ga=GA1.1.686101460.1735278394&semt=ais_hybrid',
      description: 'Timeless and elegant rings designed to perfection.',
    },
    {
      name: 'Necklaces',
      image: 'https://img.freepik.com/free-photo/bust-showcase-jewelry-display-necklace-pendant-jewelry-lifestyle-fashion-accessories-mockup_460848-14343.jpg?ga=GA1.1.686101460.1735278394&semt=ais_hybrid',
      description: 'Statement necklaces for unforgettable moments.',
    },
    {
      name: 'Bracelets',
      image: 'https://img.freepik.com/free-photo/beautiful-young-woman-wearing-sari_23-2149502988.jpg?ga=GA1.1.686101460.1735278394&semt=ais_hybrid',
      description: 'Sophisticated bracelets to enhance your charm.',
    },
    {
      name: 'Earrings',
      image: 'https://img.freepik.com/premium-photo/women-s-earings_8408-3.jpg?ga=GA1.1.686101460.1735278394&semt=ais_hybrid',
      description: 'Dazzling earrings that complete any look.',
    },
    {
      name: 'Pendants',
      image: 'https://img.freepik.com/free-photo/bust-showcase-jewelry-display-necklace-pendant-jewelry-lifestyle-fashion-accessories-mockup_460848-14340.jpg?ga=GA1.1.686101460.1735278394&semt=ais_hybrid',
      description: 'Enchanting pendants for every occasion.',
    },
    {
      name: 'Bangles',
      image: 'https://img.freepik.com/free-photo/young-indian-woman-wearing-sari_23-2149400884.jpg?ga=GA1.1.686101460.1735278394&semt=ais_hybrid',
      description: 'Beautifully crafted bangles to suit your style.',
    },
  ];

  // Hydration fix: Only set to true after the component mounts (client-side)
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      // Loop through each card and apply scroll-triggered animations
      cardRefs.current.forEach((card, index) => {
        if (card) {
          gsap.from(card, {
            opacity: 0,
            y: 100,
            duration: 1,
            delay: index * 0.3, // Delay each animation based on the index
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 90%', // Trigger when 90% of the card is visible
              end: 'bottom 10%', // End the animation when the bottom of the card is 10% from the viewport
              scrub: false, // No scrub, just trigger animation once
              once: true, // Make sure the animation happens only once
            },
          });
        }
      });
    }
  }, [isMounted]);

  if (!isMounted) {
    return null; // Hydration fix: Ensure no rendering before the component is mounted
  }

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
                ref={(el) => {
                  cardRefs.current[index] = el; // Save reference to each card
                }}
                className="relative group overflow-hidden rounded-lg shadow-md border border-gray-200 bg-white flex flex-col"
              >
                {/* Image */}
                <div className="w-full h-64 overflow-hidden relative">
                  <Image
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    width={500} // Add width for Next.js Image optimization
                    height={400} // Add height for Next.js Image optimization
                    layout="responsive" // Makes the image responsive
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between flex-grow">
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
    </div>
  );
};

export default Jewelry;
