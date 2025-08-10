export const restaurants = [
  {
    id: 1,
    name: "Food Restaurant Paradise",
    cuisine: "North Indian",
    rating: 4.5,
    deliveryTime: 30,
    price: 400,
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  }
].concat(Array.from({ length: 19 }, (_, i) => ({
  id: i + 2,
  name: `Food Restaurant ${i + 2}`,
  cuisine: ["Italian", "Chinese", "South Indian", "Fast Food"][i % 4],
  rating: (Math.random() * 2 + 3).toFixed(1),
  deliveryTime: Math.floor(Math.random() * 30 + 20),
  price: Math.floor(Math.random() * 500 + 200),
  image: `https://source.unsplash.com/800x600/?restaurant,food/${i + 2}`
})));