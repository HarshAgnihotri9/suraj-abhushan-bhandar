import Image from 'next/image';
import { FaStar } from 'react-icons/fa'; // React Icons for stars
import { Swiper, SwiperSlide } from 'swiper/react'; // Swiper.js for carousel
import 'swiper/css'; // Correct Swiper CSS import

const EnhancedTestimonials = () => {
  const reviews = [
    {
      name: 'Priya Sharma',
      image: 'https://img.freepik.com/free-photo/young-beautiful-woman-tourist-holding-passport-with-tickets-looking-camera-with-confident-smile-positive-happy-standing-satiated-blue-background_141793-24770.jpg?ga=GA1.1.686101460.1735278394&semt=ais_hybrid',
      review: 'I bought this jewelry for my wedding. The quality is unmatched, and I received so many compliments. Highly recommend to every bride-to-be!',
      rating: 5,
      location: 'Mumbai, Maharashtra',
      date: 'December 15, 2024',
      verified: true,
    },
    {
      name: 'Arvind Kumar',
      image: 'https://img.freepik.com/free-photo/smiling-young-handsome-curly-traveler-man-holding-wallet-airplane-tickets-isolated-pink-wall-with-copy-space_141793-78998.jpg?ga=GA1.1.686101460.1735278394&semt=ais_hybrid',
      review: 'Absolutely loved the necklace! The craftsmanship is impeccable. Would definitely buy again!',
      rating: 4,
      location: 'Delhi, Delhi',
      date: 'January 10, 2024',
      verified: true,
    },
    {
      name: 'Ayesha Khan',
      image: 'https://img.freepik.com/free-photo/muslim-woman-front-golden-wall_23-2147796857.jpg?ga=GA1.1.686101460.1735278394&semt=ais_hybrid',
      review: 'I bought a bracelet as a gift for my sister. She loved it! Amazing quality and packaging!',
      rating: 5,
      location: 'Bengaluru, Karnataka',
      date: 'November 22, 2024',
      verified: false,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center mb-12 text-gray-800">What Our Customers Are Saying</h2>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className={`bg-white rounded-xl shadow-lg overflow-hidden flex flex-col p-8 transform transition-all duration-300 ${index === 1 ? 'transform translate-y-[-30px]' : ''} min-h-[380px]`}>
                <div className="flex items-center space-x-6 mb-6">
                  <Image
                    src={review.image}
                    alt={review.name}
                    width={80}
                    height={80}
                    className="rounded-full border-4 border-blue-500"
                  />
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-800">{review.name}</h3>
                    <div className="flex items-center mt-2">
                      {[...Array(review.rating)].map((_, i) => (
                        <FaStar key={i} className="text-blue-400" />
                      ))}
                    </div>
                    <p className="text-sm text-gray-500 mt-1">{review.location}</p>
                    <p className="text-sm text-gray-500 mt-1">{review.date}</p>
                    {review.verified && (
                      <span className="text-xs text-green-500 font-bold mt-2">Verified Purchase</span>
                    )}
                  </div>
                </div>

                <p className="text-gray-600 text-lg leading-relaxed mb-6">{review.review}</p>

                <div className="flex justify-center">
                  <button className="text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:bg-gradient-to-l py-2 px-6 rounded-full text-lg transition-all duration-300">
                    Read More
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default EnhancedTestimonials;
