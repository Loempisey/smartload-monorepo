import React from "react";
import Grid from '@mui/material/Grid';
import Data from "./data";
const items = [
    {
        src: 'https://icons-for-free.com/iconfiles/png/512/business+costume+male+man+office+user+icon-1320196264882354682.png',
        profile: 'Chhenglee',
        payment: 'Paid',
        status:"Delivered",
        done:"",
    },
    {
        src: 'https://icons-for-free.com/iconfiles/png/512/business+costume+male+man+office+user+icon-1320196264882354682.png',
        profile: 'Chhenglee',
        payment: 'Paid',
        status:"Delivered",
        done:"",
    },
    {
        src: 'https://icons-for-free.com/iconfiles/png/512/business+costume+male+man+office+user+icon-1320196264882354682.png',
        profile: 'Chhenglee',
        payment: 'Paid',
        status:"Delivered",
        done:"",
    },
    {
        src: 'https://icons-for-free.com/iconfiles/png/512/business+costume+male+man+office+user+icon-1320196264882354682.png',
        profile: 'Chhenglee',
        payment: 'Paid',
        status:"Delivered",
        done:"",
    },
    {
        src: 'https://icons-for-free.com/iconfiles/png/512/business+costume+male+man+office+user+icon-1320196264882354682.png',
        profile: 'Chhenglee',
        payment: 'Paid',
        status:"Delivered",
        done:"",
    },
    {
        src: 'https://icons-for-free.com/iconfiles/png/512/business+costume+male+man+office+user+icon-1320196264882354682.png',
        profile: 'Chhenglee',
        payment: 'Paid',
        status:"Delivered",
        done:"",
    },
];
export default function  Inputdata() {
    return(
        <Grid container spacing={2}>
                {
                    items
                        
                        .map((item, index) => {
                            return (
                                <Grid key={index}
                                    item xs={12}
                                    sm={6}
                                    md={3}
                                >
                                    <Data
                                        src={item.src}
                                        profile={item.profile}
                                        payment={item.payment}
                                        status={item.status}
                                        done={item.done}
                                    />
                                </Grid>
                            )
                        })
                }
                
            </Grid>
    )
    
}