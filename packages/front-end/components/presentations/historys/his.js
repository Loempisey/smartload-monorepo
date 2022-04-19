import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';



const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    backgroundColor: '#EFEAEA',
    textAlign: 'left',
    color: '#346784',
    // color: theme.palette.text.secondary,
    height: 80,
    lineHeight: '80px',
    marginTop: 20,
    borderRadius: 15,
}));

// const darkTheme = createTheme({ palette: { mode: 'dark' } });
const lightTheme = createTheme({ palette: { mode: 'light' } });


export default function BasicTimeline() {
    return (
        <Grid container spacing={1} >
            <Grid item xs={2}>
                <Timeline >
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color="primary" />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent></TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color="warning" />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent></TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color="primary" />
                        </TimelineSeparator>
                        <TimelineContent></TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color="warning" />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent></TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color="primary" />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent></TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color="warning" />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent></TimelineContent>
                    </TimelineItem>


                </Timeline>
            </Grid>
            {[lightTheme].map((theme, index) => (
                <Grid item xs={10} key={index}>
                    <ThemeProvider theme={theme}>
                        <Box
                            style={{
                                p: 2,
                                bgcolor: 'background.paper',
                                display: '',
                                gridTemplateColumns: { md: '1fr 1fr' },
                                gap: 2,
                                width:"800px"
                                
                            }}
                        >
                            {[3, 3, 3, 3].map((Date) => (
                                <Item key={Date} elevation={Date} style={{ paddingLeft: "50px" }}>
                                    {`21/10/2021 | Date of lived ${Date}`}
                                    <Button variant="contained" size="small" color="primary" style={{ marginLeft: "250px" }}>Customers</Button>
                                    <Button variant="contained" size="small" color="warning" style={{ marginLeft: "50px" }}>Orders</Button>
                                </Item>
                            ))}
                        </Box>
                    </ThemeProvider>
                </Grid>
            ))}
        </Grid>
    );

}
