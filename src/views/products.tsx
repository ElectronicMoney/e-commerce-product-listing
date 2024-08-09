"use client"
// pages/index.tsx
import ProductCard from '@/components/ProductCard';


const product = {
  id: 1,
  title: 'Sample Product',
  description: 'This is a sample product description that is quite long but will be truncated.',
  price: 29.99,
  currency: "USD",
  image: 'https://via.placeholder.com/150',
  rating: 4.5,
};

const HomePage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <ProductCard {...product} />
    </div>
  );
};

export default HomePage;
