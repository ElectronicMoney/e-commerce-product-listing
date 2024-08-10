"use client"

import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';

import MainAppBar from '@/components/AppBar';



interface Props {
  children: React.ReactNode;
}

function ScrollTop({children}: Props) {

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

export default function MainLayout({children}: Props) {

  return (
    <React.Fragment>
      <CssBaseline />
      {/* Main Appbar */}
      <MainAppBar />
      <Toolbar id="back-to-top-anchor" />
      <Container maxWidth="xl">
         <Box component={"main"} sx={{mx:4, mt:4}}>
          {children}
        </Box>
      </Container>
  

      <ScrollTop>
        <Fab size="small" aria-label="scroll back to top" color='secondary'>
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}