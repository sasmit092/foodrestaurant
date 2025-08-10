import RestaurantCard from '../components/RestaurantCard';
import { restaurants } from '../data/restaurants';

export default function Home() {
  return (
    <div className="pt-20 px-4 min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Popular Food Restaurants</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {restaurants.map(restaurant => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
}