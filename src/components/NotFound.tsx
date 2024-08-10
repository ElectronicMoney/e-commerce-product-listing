import * as React from 'react';
import Box from '@mui/material/Box';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';


interface Message {
    message: string;
}

export default function NotFound({message}:Message) {
    const theme = useTheme()

    return (
        <Box component="div" sx={{py:5, px:4, textAlign:"center"}}>
            <div>
                <FindInPageIcon sx={{fontSize: "8rem", color:theme.palette.secondary.dark}} />
            </div>
            <Typography variant='h6' component={'h5'} sx={{color:theme.palette.grey[500]}}>
                {message}
            </Typography>
        </Box>
    );
}

