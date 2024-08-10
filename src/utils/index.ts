import slugify from 'slugify';
import { ProductType, ProductListType } from "@/types";


export const API_UL = "http://localhost:8000"


// Utility function to extract ID from the slug
export const extractIdFromSlug = (slug: string): number | null => {
  const parts = slug.split('-');
  const id = parts.length > 1 ? parseInt(parts.pop() ?? '', 10) : null;
  return isNaN(id!) ? null : id;
};



export const formatMoney = (amount: number, currency = 'USD') => {
  const formattedAmount = new Intl.NumberFormat(
    "en-US",
    { style: 'currency', currency: currency }
  ).format(amount);
  return formattedAmount
}

export const truncateDescription = (text: string, maxLength: number = 100) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

export function shortenString(input: string, maxLength: number): string {
  if (input.length > maxLength) {
    // Shorten the string to the specified maxLength and add three dots
    return input.substring(0, maxLength) + "...";
  }
  // If the length is within the limit, return the original string without three dots
  return input;
}

export function createUrlFromTitleAndId(title: string, id:number): string {
  // Slugify the title string to handle special characters, diacritics, and non-ASCII characters
  const slug = slugify(title, {
    lower: true,
    remove: /[!$*_+~.()'"@:;,?]/g // Include additional punctuation marks if needed
  });

  // Trim excess hyphens
  const trimmedSlug = slug.replace(/-+/g, '-').replace(/^-+|-+$/g, '');

  return `${trimmedSlug}-${id}`;
}

export function getProductIdFromUrl(productUrl: string): number | null {
    const productId = productUrl ? parseInt(productUrl.split('-').pop() ?? '', 10) : null;
    return productId
}

// Define the getProducts function
export const getProducts = async  (page: number, size: number): Promise<ProductListType> => {
  try {
    const response = await fetch(`${API_UL}/products?_page=${page}&_per_page=${size}`);

    // Check if the response is OK (status code in the range 200-299)
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    // Parse the JSON data from the response
    const data: ProductListType = await response.json();

    // Return the list of products
    return data;
  } catch (error) {
    // Handle any errors that occurred during the fetch or parsing
    console.error('Failed to fetch products:', error);
    return {
      "first": 1,
      "prev": null,
      "next": null,
      "last": 0,
      "pages": 0,
      "items": 0,
      "data": []
    }; // Return an empty array in case of error
  }
};

// Define the getProduct function
export const getProduct = async (id: number): Promise<ProductType | null> => {
  try {
    // Replace 'https://api.example.com/products/{id}' with your actual API endpoint
    const response = await fetch(`${API_UL}/products/${id}`);

    // Check if the response is OK (status code in the range 200-299)
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    // Parse the JSON data from the response
    const data: ProductType = await response.json();

    // Return the product data
    return data;
  } catch (error) {
    // Handle any errors that occurred during the fetch or parsing
    console.error('Failed to fetch product:', error);
    return null; // Return null in case of error
  }
};





