"use client"

import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import ProductCard from "@/components/ProductCard";
import NotFound from '@/components/NotFound';
import { useGetProductsQuery } from '@/lib/features/products/productsApiSlice';
import SearchBar from '@/components/SearchBar';
import { ProductType } from '@/types';
import { ProductListType } from '@/types';




export default function ProductList({ data }: { data: ProductListType }) {
  const [page, setPage] = React.useState(1);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [sortOption, setSortOption] = React.useState('price');
  const [sortOrder, setSortOrder] = React.useState<'asc' | 'desc'>('asc');

  const { data: products, error, isLoading } = useGetProductsQuery({ page, size: 10 });

  // Filter and sort products locally
  let displayProducts = products;
  if (displayProducts) {
    // Search
    displayProducts = {
      ...displayProducts,
      data: displayProducts.data.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    };

    // Sort
    displayProducts = {
      ...displayProducts,
      data: displayProducts.data.sort((a, b) => {
        if (sortOption === 'price') {
          return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
        } else {
          return sortOrder === 'asc' ? a.rating - b.rating : b.rating - a.rating;
        }
      }),
    };
  }

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  if (isLoading && page > 1) return <p>Loading...</p>;
  if (error) return <p>Error loading products</p>;

  return (
    <React.Fragment>
      <SearchBar 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        sortOption={sortOption}
        setSortOption={setSortOption}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />
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
                count={displayProducts.pages!}
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
