import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


export default function SimplePaper() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
               
                '& > :not(style)': {
                    m: 2,
                    mt: 20,
                    width: 250,
                    height: 128,
                    
                    
                },
            }}
        >
                <Paper elevation={3} />
                <Paper elevation={3} />
                
        </Box>
    );
}
