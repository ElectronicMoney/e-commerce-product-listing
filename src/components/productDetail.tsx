import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2'; 
import { ProductType } from '@/types';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { formatMoney } from '@/utils';
import Stack from '@mui/material/Stack';



// Define the props interface
interface ProductDetailProps {
  product: ProductType;
}

// Update the component to use ProductDetailProps
const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const { id, title, description, price, currency, image, rating } = product;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={5}>
        <Grid xs={12} md={6}>
          {/* Example of rendering product image */}
          <img src={image} alt={title} style={{ width: '100%' }} />
        </Grid>

        <Grid xs={12} md={6}>
          {/* Example of rendering product details */}
          <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />

          <Typography variant="h2" component="h1" sx={{my:2}}>
            {title}
          </Typography>

          <Typography variant="body1" component="p" sx={{mb:4}}>
            {description}
          </Typography>

          <Stack direction="row" spacing={5}>
            <Button variant="contained">
              Bay Now {formatMoney(price, currency)}
            </Button>

            <Button variant="contained">
                Add To Cart
            </Button>

          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProductDetail;
