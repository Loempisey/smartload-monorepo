import * as React from 'react';
import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Box, ThemeProvider, createTheme } from '@mui/system';
import CommentIcon from '@mui/icons-material/Comment';
import EventNoteIcon from '@mui/icons-material/EventNote';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import {
    TableDashboard,
    LineChart,
    PieChart,
    HorizontalBarChart,
} from "../../presentations/dashboards";
import {
    pieData,
    horizontalBarData,
    singleLineData,
    doubleData,
} from "../layouts/StaticData";

const useStyles = makeStyles((theme) => ({
    // chart: {
    //     height: 420,
    //     marginTop:15,
        
    // },
    charts: {
        height: 350,
        width:1130,
        marginTop:15,
        marginLeft: 25
    },
}));

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
    const classes = useStyles();
    return (
        <Box sx={{ flexGrow: 1 }}>
<<<<<<< HEAD
            <Grid container spacing={2}>
=======
            <Grid container spacing={1}>
                <Grid item xs={12} >
                    {/* .... */}
                    <Grid container spacing={1} style={{justifyContent:"space-between",marginTop:"20px"}} >
                        <Grid item xs={4} md={4} sm={4}>
                            <div style={{ display: "flex", width:200, margin:'0px auto' }}>
                                <div>
                                    <ThemeProvider theme={theme}>

                                        <Box
                                            sx={{
                                                bgcolor: '#FCA33C',
                                                boxShadow: 1,
                                                p: 2,
                                                mt: 2,
                                            }}
                                            style={{ width: "200px", borderRadius: "10px",  }}>
                                            <Box style={{ color: 'text.primary', fontSize: 30, fontWeight: 'medium' }}>
                                                Income
                                            </Box>
                                            <Box
                                                style={{
                                                    color: 'white',
                                                    display: 'inline',
                                                    fontWeight: 'medium',
                                                    mx: 0.5,
                                                }}
                                            >
                                                9999$
                                            </Box>
                                        </Box>

                                    </ThemeProvider>
                                    <CommentIcon style={{ color: "white", marginLeft: "120px", marginTop: "-79px", position: "absolute", fontSize: "45" }}></CommentIcon>
                                </div>
                            </div>

                        </Grid>


                        <Grid item xs={4} md={4} sm={4}>
                            <div style={{ display: "flex",width:200, margin:'0px auto' }}>
                                <div>
                                    <ThemeProvider theme={theme}>

                                        <Box
                                            sx={{
                                                bgcolor: '#FA8072' ,
                                                boxShadow: 1,
                                                p: 2,
                                                mt: 2,
                                            }}
                                            style={{ width: "200px", borderRadius: "10px" }}>
                                            <Box style={{ color: 'text.primary', fontSize: 30, fontWeight: 'medium' }}>
                                                Order
                                            </Box>
                                            <Box
                                                style={{
                                                    color: 'white',
                                                    display: 'inline',
                                                    fontWeight: 'medium',
                                                    mx: 0.5,
                                                }}
                                            >
                                                168
                                            </Box>
                                        </Box>

                                    </ThemeProvider>
                                    <EventNoteIcon style={{ color: "white", marginLeft: "120px", marginTop: "-79px", position: "absolute", fontSize: "45" }}></EventNoteIcon>
                                </div>
                            </div>
                        </Grid>

                        <Grid item xs={4} md={4} sm={4}>
                            <div style={{ display: "flex",width:200, margin:'0px auto' }}>
                                <div>
                                    <ThemeProvider theme={theme}>

                                        <Box
                                            sx={{
                                                bgcolor: '#FA8072' ,
                                                boxShadow: 1,
                                                p: 2,
                                                mt: 2,
                                            }}
                                            style={{ width: "200px", borderRadius: "10px" }}>
                                            <Box style={{ color: 'text.primary', fontSize: 30, fontWeight: 'medium' }}>
                                                Comment
                                            </Box>
                                            <Box
                                                style={{
                                                    color: 'white',
                                                    display: 'inline',
                                                    fontWeight: 'medium',
                                                    mx: 0.5,
                                                }}
                                            >
                                                199
                                            </Box>
                                        </Box>

                                    </ThemeProvider>
                                    <EventNoteIcon style={{ color: "white", marginLeft: "150px", marginTop: "-79px", position: "absolute", fontSize: "45" }}></EventNoteIcon>
                                </div>
                            </div>
                        </Grid>


                    </Grid>
>>>>>>> afffeda078a063df4a69b24d84bd9fa318d67087
                    <Grid item xs={12}>
                        <div>
                            <Paper className={classes.charts}>
                                <LineChart data={doubleData} />
                            </Paper>
                        </div>
                    </Grid>
<<<<<<< HEAD
=======
                </Grid>
                {/* <Grid item xs={4}>
                    <div>
                        <Paper className={classes.chart} >
                            <p style={{marginBottom:"0px",marginLeft:"10px",fontWeight:"bold"}}>Daily Sales</p>
                            <PieChart data={pieData} />
                        </Paper>
                    </div>
                </Grid> */}

>>>>>>> afffeda078a063df4a69b24d84bd9fa318d67087
            </Grid>
        </Box>
    );
}
