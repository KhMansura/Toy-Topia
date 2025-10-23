import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";


const Footer = () => (
  <footer className="bg-gradient-to-r from-pink-300 to-blue-300  text-white">
    <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
      <div>
        <div
          className=" 
 w-10 h-10 rounded-full flex items-center justify-center shadow"
        >
          <span className=" ">
            <img
              src={logo}
              alt=""
              className="w-full h-full object-contain rounded-full"
            />
          </span>
        </div>
        <h3 className="text-2xl font-bold mb-2">ToyTopia</h3>
        <p>Discover fun, creativity, and learning through toys!</p>
      </div>
      <div>
        <h4 className="font-semibold mb-2">Quick Links</h4>
        <ul>
          <li>
            <Link to="/terms" className="hover:underline">
              Terms & Conditions
            </Link>
          </li>
          <li>
            <Link to="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-2">Follow Us</h4>
        <div className="flex gap-3">
          <a href="https://www.facebook.com/login.php/" target="_blank">
            <FaFacebookSquare />Facebook
          </a>
          <a href="https://instagram.com" target="_blank">
            <FaSquareInstagram />Instagram
          </a>
          <a href="https://twitter.com" target="_blank">
            <FaTwitterSquare />Twitter
          </a>
        </div>
      </div>
    </div>
    <div className="text-center bg-blue-300 py-3 text-sm">
      © {new Date().getFullYear()} ToyTopia. All rights reserved.
    </div>
  </footer>
);

export default Footer;
