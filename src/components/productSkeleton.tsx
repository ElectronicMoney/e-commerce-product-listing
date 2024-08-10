import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2'; 



export default function ProductSkeleton() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={12} md={6}>
            Box
        </Grid>

        <Grid xs={12} md={6}>
            Box
        </Grid>
      </Grid>
    </Box>
  );
}

