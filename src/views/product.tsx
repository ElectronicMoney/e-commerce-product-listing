import React, {lazy, Suspense} from 'react';
import { ProductType } from '@/types';
import { getProduct, extractIdFromSlug } from '@/utils';
import ProductSkeleton from '@/components/productSkeleton';

const ProductDetail = lazy(() => import('@/components/productDetail'));


// Server component
const ProductPage = async ({ title }: { title: string }) => {

  // Extract ID from the slug
  const id = extractIdFromSlug(title);

  if (!id) {
    return <p>Invalid product ID</p>;
  }

  // Fetch product data
  try {
    const product: ProductType | null = await getProduct(id);

    if (!product) {
      return <p>Product not found</p>;
    }

    return (
        <Suspense fallback={<ProductSkeleton />}>
            <ProductDetail product={product} />
        </Suspense>
    )
        
  } catch (error) {
    console.error('Error fetching product:', error);
    return <p>Failed to load product</p>;
  }
};

export default ProductPage;
