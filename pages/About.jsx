export default function About() {
  return (
    <div className="pt-20 px-4 min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">About Us</h1>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Welcome to Swiggy Clone, your go-to platform for discovering and ordering from the best restaurants in your area.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Our mission is to connect food lovers with their favorite restaurants and help them discover new culinary experiences.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            With a wide selection of restaurants and cuisines, we ensure that you'll always find something to satisfy your cravings.
          </p>
        </div>
      </div>
    </div>
  );
}