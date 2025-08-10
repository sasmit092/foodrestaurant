import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useCart } from '../context/CartContext';
import { FaSun, FaMoon, FaShoppingCart } from 'react-icons/fa';

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useTheme();
  const { cart } = useCart();

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-800 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-orange-500"> Food Restaurant</Link>
          
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-gray-700 dark:text-gray-200 hover:text-orange-500">Home</Link>
            <Link to="/about" className="text-gray-700 dark:text-gray-200 hover:text-orange-500">About Us</Link>
            <Link to="/cart" className="relative">
              <FaShoppingCart className="text-gray-700 dark:text-gray-200 text-xl" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cart.length}
                </span>
              )}
            </Link>
            <button onClick={toggleDarkMode} className="p-2">
              {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-700" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}