import * as React from 'react';
import dynamic from 'next/dynamic';
import { getProduct, extractIdFromSlug } from '@/utils';
import { ProductType } from '@/types';



const Product = dynamic(() => import("@/views/product"), {
  ssr: true,
});


export async function generateMetadata({ params }: { params: { title: string } }) {

  // Extract ID from the slug
  const id = extractIdFromSlug(params.title);

  if (!id) {
    return <p>Invalid product ID</p>;
  }

  // Fetch product data
  const product: ProductType | null = await getProduct(id);

  if (!product) {
    return <p>Product not found</p>;
  }

  return {

    title: `BisaTech - ${product.title}`,
    description: `${product.description}`,
    keywords: ["product", "meta keywords", "is", "very", "important", "for", "seo"],

    openGraph: {
      title: `BisaTech - ${product.title}`,
      description: `${product.description}`,
      images: [
        {
          url: `${product.image}`,
          alt: `${product.title}`,
        }
      ],
    },
  }
}


export default async function ProductPage({ params }: { params: { title: string } }) {

  return (
    <Product  title={params.title}/>
  )
}

