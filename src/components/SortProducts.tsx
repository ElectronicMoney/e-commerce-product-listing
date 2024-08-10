"use client"

import * as React from 'react';
import { Select, MenuItem, SelectChangeEvent } from '@mui/material';

import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';



interface SortProductsProps {
  sortOption: string; // e.g., "price" or "rating"
  setSortOption: React.Dispatch<React.SetStateAction<string>>;
  sortOrder: 'asc' | 'desc';
  setSortOrder: React.Dispatch<React.SetStateAction<'asc' | 'desc'>>;
}

const SortProducts: React.FC<SortProductsProps> = ({ sortOption, setSortOption, sortOrder, setSortOrder }) => {
  const handleSortOptionChange = (event: SelectChangeEvent<string>) => {
    setSortOption(event.target.value);
  };

  const handleSortOrderChange = (event: SelectChangeEvent<'asc' | 'desc'>) => {
    setSortOrder(event.target.value as 'asc' | 'desc');
  };

  return (
    <div>
      <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Sort By</InputLabel>

          <Select
            value={sortOption}
            onChange={handleSortOptionChange}
            displayEmpty
            label="Sort By"
            size='small'
          >
            <MenuItem value="price">Price</MenuItem>
            <MenuItem value="rating">Rating</MenuItem>
          </Select>
        </FormControl>
      {/* <Select
        value={sortOrder}
        onChange={handleSortOrderChange}
        displayEmpty
      >
        <MenuItem value="asc">Ascending</MenuItem>
        <MenuItem value="desc">Descending</MenuItem>
      </Select> */}
    </div>
  );
};

export default SortProducts;
