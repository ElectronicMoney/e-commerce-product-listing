"use client"

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import {  useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { formatMoney } from '@/utils';


export default function MenuAppBar() {

  const cart = useSelector((state: RootState) => state.shoppingCart);
  
  const [isClient, setIsClient] = React.useState(false); 

    // Update isClient after the component mounts
    React.useEffect(() => {
      setIsClient(true);
    }, []);

    if (!isClient) {
      // Render nothing or a placeholder on the server side
      return null;
    }

  return (
    <AppBar>
    <Toolbar>
        <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        >
        <MenuIcon />
        </IconButton>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            PRODUCTS
        </Typography>


        <Button
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="inherit"
          variant='outlined'
          >

            Total: {formatMoney(cart.totalPrice)}
            
            <Badge badgeContent={cart.totalProducts} color="error">
                <ShoppingCartIcon />
            </Badge>
          </Button>
   
    </Toolbar>
    </AppBar>
  );
}
