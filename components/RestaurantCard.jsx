import { useCart } from '../context/CartContext';

export default function RestaurantCard({ restaurant }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <img 
        src={restaurant.image} 
        alt={restaurant.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{restaurant.name}</h3>
        <p className="text-gray-600 dark:text-gray-300">{restaurant.cuisine}</p>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-gray-700 dark:text-gray-200">⭐ {restaurant.rating}</span>
          <span className="text-gray-600 dark:text-gray-300">{restaurant.deliveryTime} mins</span>
        </div>
        <button
          onClick={() => addToCart(restaurant)}
          className="mt-4 w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}