import * as React from 'react';
import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Box, ThemeProvider, createTheme } from '@mui/system';
import CommentIcon from '@mui/icons-material/Comment';
import EventNoteIcon from '@mui/icons-material/EventNote';



const theme = createTheme({
    palette: {
        background: {
            paper: '#FCA33C',
        },
        text: {
            primary: '#173A5E',
            secondary: '#46505A',
        },
        action: {
            active: '#001E3C',
        },
        success: {
            dark: '#009688',
        },
    },
});



export default function BasicGrid() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
                <Grid item xs={8}>
                    <Grid container spacing={1}>
                        <Grid item xs={6}>
                        <div style={{ display: "flex", marginRight: "30px" }}>
                                <div>
                                    <ThemeProvider theme={theme}>

                                        <Box
                                            sx={{
                                                bgcolor: '#FCA33C',
                                                boxShadow: 1,
                                                p: 2,
                                                mt: 2,
                                            }}
                                            style={{ width: "200px", borderRadius: "10px" }}>
                                            <Box style={{ color: 'text.primary', fontSize: 30, fontWeight: 'medium' }}>
                                                200 K
                                            </Box>
                                            <Box
                                                style={{
                                                    color: 'white',
                                                    display: 'inline',
                                                    fontWeight: 'medium',
                                                    mx: 0.5,
                                                }}
                                            >
                                                Comments
                                            </Box>
                                        </Box>

                                    </ThemeProvider>
                                    <CommentIcon style={{ color: "white", marginLeft: "120px", marginTop: "-79px", position: "absolute", fontSize: "45" }}></CommentIcon>
                                </div>
                            </div>

                        </Grid>
                        <Grid item xs={6}>
                            <div style={{ display: "flex", marginRight: "30px" }}>
                                <div>
                                    <ThemeProvider theme={theme}>

                                        <Box
                                            sx={{
                                                bgcolor: '#237FD4',
                                                boxShadow: 1,
                                                p: 2,
                                                mt: 2,
                                            }}
                                            style={{ width: "200px", borderRadius: "10px" }}>
                                            <Box style={{ color: 'text.primary', fontSize: 30, fontWeight: 'medium' }}>
                                                200 K
                                            </Box>
                                            <Box
                                                style={{
                                                    color: 'white',
                                                    display: 'inline',
                                                    fontWeight: 'medium',
                                                    mx: 0.5,
                                                }}
                                            >
                                                Orders
                                            </Box>
                                        </Box>

                                    </ThemeProvider>
                                    <EventNoteIcon style={{ color: "white", marginLeft: "120px", marginTop: "-79px", position: "absolute", fontSize: "45" }}></EventNoteIcon>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                {/* <Grid item xs={4}>
                    <div>Grap</div>
                </Grid>
                <Grid item xs={8}>
                    <div>Big Grap</div>
                </Grid> */}
            </Grid>
        </Box>
    );
}
