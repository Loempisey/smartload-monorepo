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
} from "../layouts/staticData";

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
            <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <div>
                            <Paper className={classes.charts}>
                                <LineChart data={doubleData} />
                            </Paper>
                        </div>
                    </Grid>
            </Grid>
        </Box>
    );
}
