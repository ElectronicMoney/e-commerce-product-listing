// components/ProductCard.tsx
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import { CardActionArea } from '@mui/material';
import Link from 'next/link'

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import {ProductType} from "@/types"
import { createUrlFromTitleAndId, formatMoney , truncateDescription } from "@/utils"


// Define the props interface
interface ProductCardProps {
  product: ProductType;
}

// Update the component to use ProductDetailProps
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { id, title, description, price, currency, image, rating } = product;

  
  return (
    <Card 
    sx={{ 
      maxWidth: 400 ,
      boxShadow: 8,
      "&:hover": { boxShadow: 24 }
    }}
    >
      <CardActionArea component={Link} href={`/${createUrlFromTitleAndId(product.title, product.id)}`}>
        <CardMedia
          component="img"
          alt={title}
          height="300"
          image={image}

          sx={{
            height: 300,
            "&:hover": {
              transform: "scale(1.1)"
            },
            transition: "1s"
          }}
        />
      </CardActionArea>

      <CardContent>
        <Typography variant="h5" component="div" sx={{mb:2}}>
          {title}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {truncateDescription(description)}
        </Typography>

        <Typography variant="h6" component="div" sx={{mt:2}}>
          {formatMoney(price, currency)}
        </Typography>

        <Typography variant="h6" component="div" sx={{mt:2}}>
          <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
        </Typography>

      </CardContent>

      <CardActions>
        <Button variant="contained" defaultValue={id} fullWidth> Add To Cart</Button>
      </CardActions>
    </Card>
  );
}


export default ProductCard;
