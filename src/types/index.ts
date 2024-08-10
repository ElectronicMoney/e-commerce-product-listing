export interface ProductType {
  id: number;
  title: string;
  description: string;
  price: number;
  currency: string;
  image: string;
  rating: number; 
}


export interface ProductListType {
  first: number | null;
  prev: number | null;
  next: number | null;
  last: number | null;
  pages: number | null;
  items: number | null;
  data: ProductType[]
}