import { createTheme } from '@mui/material/styles';
import roboto from "@/theme/font"


// Define the theme object
const theme = createTheme({
  palette: {
    primary: {
      main: "#283593",  // Deep indigo
      light: "#303f9f",  // Light indigo
      dark: '#1a237e',   // Dark indigo

    },
    secondary: {
      main: "#d500f9",  // Deep Purple
      light: "#e040fb",  // Light Purple
      dark: '#aa00ff',   // Dark Purple
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    h1: {
      fontSize: '1.5rem',
      fontWeight: 700,
      '@media (min-width:600px)': {
        fontSize: '2.0rem',
      },
      [createTheme().breakpoints.up('md')]: {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontSize: '1.25rem',
      fontWeight: 700,
      '@media (min-width:600px)': {
        fontSize: '1.75rem',
      },
      [createTheme().breakpoints.up('md')]: {
        fontSize: '2.25rem',
      },
    },
    h3: {
      fontSize: '1.125rem',
      fontWeight: 700,
      '@media (min-width:600px)': {
        fontSize: '1.5rem',
      },
      [createTheme().breakpoints.up('md')]: {
        fontSize: '2.0rem',
      },
    },
    h4: {
      fontSize: '1rem',
      fontWeight: 700,
      '@media (min-width:600px)': {
        fontSize: '1.25rem',
      },
      [createTheme().breakpoints.up('md')]: {
        fontSize: '1.75rem',
      },
    },
    h5: {
      fontSize: '0.875rem',
      fontWeight: 700,
      '@media (min-width:600px)': {
        fontSize: '1.125rem',
      },
      [createTheme().breakpoints.up('md')]: {
        fontSize: '1.5rem',
      },
    },
    h6: {
      fontSize: '0.75rem',
      fontWeight: 700,
      '@media (min-width:600px)': {
        fontSize: '1rem',
      },
      [createTheme().breakpoints.up('md')]: {
        fontSize: '1.25rem',
      },
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
    },
    button: {
      fontSize: '0.875rem',
      fontWeight: 500,
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 300,
    },
    overline: {
      fontSize: '0.75rem',
      fontWeight: 300,
    },
  },
});

export default theme;