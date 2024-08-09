// components/ProductCard.tsx
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';


interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: number;
  rating: number; // Assuming rating is a number between 0 and 5
  onAddToCart: () => void;
}


const truncateDescription = (text: string, maxLength: number = 100) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

const formatPrice = (price: number) => {
  return `$${price.toFixed(2)}`;
};


const ProductCard: React.FC<ProductCardProps> = ({ image, title, description, price, rating, onAddToCart }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={title}
        height="250"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {truncateDescription(description)}
        </Typography>

        <Typography gutterBottom variant="body2" component="div">
          {formatPrice(price)}
        </Typography>

        <Typography gutterBottom variant="body2" component="div">
          <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
        </Typography>

      </CardContent>
      <CardActions>
        <Button size="small" onClick={onAddToCart}>Add To Cart</Button>
      </CardActions>
    </Card>
  );
}


export default ProductCard;
