export interface ProductProps {
  id: number;
  title: string;
  description: string;
  price: number;
  currency: string;
  image: string;
  rating: number; // Assuming rating is a number between 0 and 5
}