import React, {lazy, Suspense} from 'react';
import NotFound from "@/components/NotFound"

import { ProductType, ProductListType } from '@/types';
import { getProducts } from '@/utils';
import ProductSkeleton from '@/components/productSkeleton';
import ProductList from './productList';


// Server component
const ProductsPage = async () => {

  // Fetch product data
  try {
    const products: ProductListType = await getProducts(1, 10);

    if (!products) {
      return <NotFound message={"Oops! It looks like there are no products published yet. Please check back soon for updates!"} />
    }

    return (
      <ProductList data={products} />
    )
        
  } catch (error) {
    console.error('Error fetching product:', error);
    return <p>Failed to load product</p>;
  }
};

export default ProductsPage;
