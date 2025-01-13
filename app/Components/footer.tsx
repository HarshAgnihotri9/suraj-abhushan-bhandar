import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'; // Icons for social media

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {/* About Us */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-blue-500">About Suraj Abhushan Bhandar</h3>
          <p className="text-gray-400 text-lg">
            Suraj Abhushan Bhandar offers a wide selection of timeless, handcrafted jewelry that blends tradition with elegance, perfect for every occasion. Our mission is to provide quality and trust with each piece.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-blue-500">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="text-gray-400 hover:text-blue-500 text-lg transition-colors duration-300">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/shop" className="text-gray-400 hover:text-blue-500 text-lg transition-colors duration-300">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-400 hover:text-blue-500 text-lg transition-colors duration-300">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-gray-400 hover:text-blue-500 text-lg transition-colors duration-300">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-blue-500">Contact Info</h3>
          <p className="text-gray-400 text-lg">Phone: +91 123 456 7890</p>
          <p className="text-gray-400 text-lg">Email: contact@surajabhushan.com</p>
          <p className="text-gray-400 text-lg">Address: XYZ Road, City, State, India</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-blue-500">Follow Us</h3>
          <div className="flex space-x-6">
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-3xl text-gray-400 hover:text-blue-500 transition-all duration-300" />
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-3xl text-gray-400 hover:text-blue-500 transition-all duration-300" />
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-3xl text-gray-400 hover:text-blue-500 transition-all duration-300" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-3xl text-gray-400 hover:text-blue-500 transition-all duration-300" />
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center mt-12 border-t border-gray-600 pt-6">
        <p className="text-gray-400 text-lg">
          &copy; {new Date().getFullYear()} Suraj Abhushan Bhandar. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
