"use client"

import * as React from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import SortProducts from "./SortProducts";
import Grid from '@mui/material/Unstable_Grid2';


interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  sortOption: string;
  setSortOption: React.Dispatch<React.SetStateAction<string>>;
  sortOrder: 'asc' | 'desc';
  setSortOrder: React.Dispatch<React.SetStateAction<'asc' | 'desc'>>;
}

export default function SearchBar({
  searchTerm,
  setSearchTerm,
  sortOption,
  setSortOption,
  sortOrder,
  setSortOrder,
}: SearchBarProps) {
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Grid container spacing={2} sx={{mb:4}}>
      <Grid xs={3}>
        <SortProducts
          sortOption={sortOption}
          setSortOption={setSortOption}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
        />
      </Grid>
      <Grid xs={9}>
        <TextField
          size='small'
          id="outlined-start-search-bar"
          fullWidth
          placeholder='Search Products By Title...'
          value={searchTerm}
          onChange={handleSearchChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color='primary' />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
    </Grid>
  );
}
