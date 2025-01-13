"use client";
import Navbar from "./Components/Navbar";
import Jewelry from "./mainpage";
import JewelryPage from "./mainpage";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section with Video Background */}
      <div className="relative w-full h-screen sm:h-[90vh] mb-0 overflow-hidden">
        {/* Background Video */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/suraj2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Simplified Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40">
          <div className="text-center text-white">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-extrabold mb-4">
              Suraj Abhushan Bhandar
            </h1>
            <p className="text-lg sm:text-xl mb-6">
              Exclusive Jewelry for Every Occasion
            </p>

            {/* Explore Now Button */}
            <button className="relative px-6 py-3 text-lg font-medium text-white bg-transparent border border-white rounded overflow-hidden group">
              <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 transition-transform transform -translate-x-full group-hover:translate-x-0 group-hover:bg-blue-600"></span>
              <span className="relative z-10 group-hover:text-white transition-colors">Explore Now</span>
            </button>
          </div>
        </div>
      </div>
      <Jewelry/>

      {/* Main Page Section */}
    </>
  );
}
