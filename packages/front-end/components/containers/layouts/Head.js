import React from 'react'
import Link from 'next/link'
import { render } from 'react-dom'
import Grid from '@mui/material/Grid';

export default function Head() {
    return (
        <Grid item xs={2} sm={8} md={12}>
            <div style={{marginTop:"35px",color: "#145DA0" }}>  
                {/* <h1 style={{ fontFamily: "'Quicksand', sans-serif", marginLeft:"-195px",  fontWeight:"700" }}>SmartLoad</h1>          */}
                <h1 style={{fontFamily: "'Quicksand', sans-serif", margin:"20px", marginLeft: "70px"}}>SmartLoad</h1>         
            </div>
        </Grid>
    )
}