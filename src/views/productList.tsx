"use client";

import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';

import ProductCard from "@/components/ProductCard";
import NotFound from '@/components/NotFound';
import { useGetProductsQuery } from '@/lib/features/products/productsApiSlice';

import { ProductType } from '@/types';
import { ProductListType } from '@/types';



export default function ProductList({ data }: { data: ProductListType }) {
  const [page, setPage] = React.useState(1);

  const { data: products, error, isLoading } = useGetProductsQuery({ page, size: 10 }, { 
    skip: page === 1 && data?.data?.length > 0, 
  });

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };


  // Use initial data if available and avoid re-fetching on the first load
  const displayProducts = page === 1 && data ? data : products;

  if (isLoading && page > 1) return <p>Loading...</p>;
  if (error) return <p>Error loading products</p>;

  return (
    <React.Fragment>
      <Grid container spacing={5}>
        {displayProducts && displayProducts.data.length > 0 ? (
          displayProducts.data.map((product: ProductType) => (
            <Grid xs={12} key={product.id} md={4}>
              <ProductCard product={product} />
            </Grid>
          ))
        ) : (
          <Grid xs={12}>
            <NotFound message={"Oops! No Product Found!"} />
          </Grid>
        )}

        <Grid xs={12}>
          {displayProducts && displayProducts.data.length > 0 ? (
            <Typography component={"div"} 
              sx={{
                my: 5,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <Pagination 
                shape="rounded"  
                size="large" 
                count={displayProducts ? displayProducts.pages! : 1} 
                page={page} 
                onChange={handleChange}
                color="secondary"
              />
            </Typography>
          ) : null}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
