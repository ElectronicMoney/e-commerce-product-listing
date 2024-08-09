// components/ProductCard.tsx
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import {ProductProps} from "@/types"
import { formatMoney , truncateDescription } from "@/utils"




const ProductCard: React.FC<ProductProps> = ({ id, title, description, price, currency, image, rating }) => {
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

        <Typography gutterBottom variant="h6" component="div" sx={{mt:2}}>
          {formatMoney(price, currency)}
        </Typography>

        <Typography gutterBottom variant="h6" component="div" sx={{mt:2}}>
          <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
        </Typography>

      </CardContent>
      <CardActions>
        <Button variant="contained" defaultValue={id}> Add To Cart</Button>
      </CardActions>
    </Card>
  );
}


export default ProductCard;
