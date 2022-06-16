import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { loginFacebook, getPages } from "../../../utils/facebook";

const useStyles = makeStyles({
  total_income: {
    fontSize: "30px",
    marginTop: "30px",
    marginRight: "-30px",
  },
});

// const cards = [
//    {
//         title: "Total Income",
//         total:"$00.00",

//    },
//    {
//         title: "Total Customer",
//         total:"$00.00",

//     },
//     {
//         title: "Total Comment",
//         total:"$00.00",

//    },
// ];

export default function Total() {
  const [account, setAccount] = React.useState();
  const [pages, setPages] = React.useState();

  const classes = useStyles();
  return (
    <div>
        <Typography style={{
            fontSize: "24px",
            fontWeight: "bold",
            fontFamily: "'Quicksand', sans-serif",
            marginLeft: "25px",
            marginTop: "-70px"

            
        }}
        >Overview</Typography>
      <Button variant="outlined" onClick={()=>{loginFacebook(setAccount)}}>Facebook Login</Button>
      <Button variant="outlined" onClick={()=>{getPages(account, setPages)}}>Facebook Pages</Button>
      {
        console.log(pages)
      }
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              marginTop: "10px",
              "& > :not(style)": {
                m: 3,
                width: 250,
                height: 128,
                background: "#50C878",
              },
            }}
          >
            <Paper elevation={3}>
              <Typography
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  fontFamily: "'Quicksand', sans-serif",
                  marginTop: "5px",
                  marginLeft: "10px",
                  color: "white",
                }}
              >
                Total Income
              </Typography>
              <Typography
                style={{
                  fontSize: "30px",
                  marginTop: "20px",
                  textAlign: "center",
                  color: "white",
                }}
              >
                $00.00
              </Typography>
            </Paper>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              marginTop: "10px",
              "& > :not(style)": {
                m: 3,
                width: 250,
                height: 128,
                background: "#FC8C3C",
              },
            }}
          >
            <Paper elevation={3}>
              <Typography
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  fontFamily: "'Quicksand', sans-serif",
                  marginTop: "5px",
                  marginLeft: "10px",
                  color: "white",
                }}
              >
                Total Customer
              </Typography>
              <Typography
                style={{
                  fontSize: "30px",
                  marginTop: "20px",
                  textAlign: "center",
                  color: "white",
                }}
              >
                500
              </Typography>
            </Paper>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              marginTop: "10px",
              "& > :not(style)": {
                m: 3,
                width: 250,
                height: 128,
                background: "#2478C5",
              },
            }}
          >
            <Paper elevation={3}>
              <Typography
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  fontFamily: "'Quicksand', sans-serif",
                  marginTop: "5px",
                  marginLeft: "10px",
                  color: "white",
                }}
              >
                Total Comments
              </Typography>
              <Typography
                style={{
                  fontSize: "30px",
                  marginTop: "20px",
                  textAlign: "center",
                  color: "white",
                }}
              >
                200
              </Typography>
            </Paper>
          </Box>
        </Grid>
      </Grid>
      <div>
        <Typography style={{
                fontSize: "24px",
                fontWeight: "bold",
                fontFamily: "'Quicksand', sans-serif",
                marginLeft: "25px",
                marginTop: "20px"

                
            }}
            >Managment</Typography>
      </div>

    </div>
    // <div>
    //     {cards.map((card, index)=>{
    //         return(
    //                 <Box
    //                     sx={{
    //                     display: 'flex',
    //                     flexWrap: 'wrap',
    //                     marginTop:'10px',
    //                     '& > :not(style)': {
    //                         m: 3,
    //                         width: 300,
    //                         height: 128,
    //                     },
    //                     }}
    //                 >
    //                         <Paper elevation={3}>
    //                             <Typography style={{
    //                             fontSize:"20px",
    //                             fontWeight: "bold",
    //                             fontFamily: "'Quicksand', sans-serif",
    //                             marginTop: "5px",
    //                             marginLeft: "10px"

    //                             }}>{card.title}</Typography>
    //                             <Typography style={{
    //                                 fontSize: "30px",
    //                                 marginTop: "20px",
    //                                 textAlign:"center"
    //                             }}>{card.total}</Typography>
    //                         </Paper>
    //                 </Box>
    //         )
    //     })},
    // </div>
  );
}
