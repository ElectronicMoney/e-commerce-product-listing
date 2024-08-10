import * as React from 'react';
import Products from "@/views/products"


export async function generateMetadata() {
  return {
    title: "React (Next.js) E-commerce Product Listing Page with Server Side Rendering",
    openGraph: {
      title: "React (Next.js) E-commerce Product Listing Page with Server Side Rendering",
      description: "Objective: The goal of this coding challenge is to create an e-commerce product listing page using Next.js and Tailwind CSS. The candidate should demonstrate their ability to work with React components, manage state using Redux, interact with an API on the server-side, and implement SEO metadata.",
      images: [
        {
          url: 'https://bisatech.com/images/logo-main.jpg', // Must be an absolute URL
          alt: 'BisaTech',
        }
      ],
    },
  }
}

export default function AboutPage() {

  return (
      <Products />
  )
}