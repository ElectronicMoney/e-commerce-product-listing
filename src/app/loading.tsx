"use client"

import React from 'react';
import { styled } from '@mui/material/styles';
import { keyframes } from '@mui/system';
import CssBaseline from '@mui/material/CssBaseline';
import Image from 'next/image'
import Logo  from "../../public/logo.png"


const HeartBeat = keyframes`
    0% {opacity: 0.25; transform: scale(1);}
    25% {opacity: 0.45; transform: scale(1.3);}
    50% {opacity: 0.65; transform: scale(1.4);}
    75% {opacity: 0.85; transform: scale(1.3);}
    100% {opacity: 1.0; transform: scale(1);}
`;


const Div = styled("div")(({theme}) => ({
    display: 'flex',
    height: '100vh',
    width: '100vw',
    padding: 0,
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    background: theme.palette.primary.dark
  }));
  

  const MainImage = styled(Image)(() => ({
    animation: `${HeartBeat} 1.5s linear infinite;`,
    borderRadius: '10px',
  }));


function Loading() {
    return ( 
      <React.Fragment>
        <CssBaseline />
          <Div>
              <MainImage src={Logo} alt='BisaTech' width={50} height={50}/>
          </Div>
      </React.Fragment>
     );
}

export default Loading;