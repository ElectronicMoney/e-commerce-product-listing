"use client"
// pages/index.tsx
import ProductCard from '@/components/ProductCard';


const sampleProduct = {
  image: 'https://via.placeholder.com/150',
  name: 'Sample Product',
  description: 'This is a sample product description that is quite long but will be truncated.',
  price: 29.99,
  rating: 2.5,
  onAddToCart: () => alert('Added to cart'),
};

const HomePage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <ProductCard {...sampleProduct} />
    </div>
  );
};

export default HomePage;
