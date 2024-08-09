"use client"

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import theme from '.';

interface Children {
  children: React.ReactNode;
}

export default function MUIThemeProvider ({children}: Children) {
    return (
        <ThemeProvider theme={theme}> 
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
}