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

const cards = [
   {
        title: "Total Income",
        total:"$00.00",

   },
   {
        title: "Total Customers",
        total:"100",

    },
    {
        title: "Total Videos",
        total:"200",

   },
   {
    title: "Total Comments",
    total:"150",

  },
  

];

export default function Total(prop) {
  const [account, setAccount] = React.useState();
  const [pages, setPages] = React.useState();

  const classes = useStyles();
  return (
    <div>
        {cards.map((card, index)=>{
            return(
              <div key={index}>
                <Grid container spacing={2}>
                  <Grid item xs={3}>
                  <Box
                        sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        marginTop:'10px',
                        '& > :not(style)': {
                            m: 3,
                            width: 300,
                            height: 128,
                        },
                        }}
                    >
                            <Paper elevation={3}>
                                <Typography style={{
                                fontSize:"20px",
                                fontWeight: "bold",
                                fontFamily: "'Quicksand', sans-serif",
                                marginTop: "5px",
                                marginLeft: "10px"

                                }}>{card.title}</Typography>
                                <Typography style={{
                                    fontSize: "30px",
                                    marginTop: "20px",
                                    textAlign:"center"
                                }}>{card.total}</Typography>
                            </Paper>
                    </Box>

                  </Grid>
                </Grid>

              </div>
            )
        })},
    </div>
  );
}
