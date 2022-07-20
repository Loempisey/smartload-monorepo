import React from "react";
import ProductCard from "./ProductCard";
import { useState } from "react";
import { Grid, TextField } from "@material-ui/core";
import Avatar from '@mui/material/Avatar';
import ChatBubbleRoundedIcon from '@mui/icons-material/ChatBubbleRounded';
import RecommendRoundedIcon from '@mui/icons-material/RecommendRounded';
const items = [
    {
        src: 'https://www.verdict.co.uk/wp-content/uploads/2021/04/shutterstock_1583248045.jpg',
        name: 'Video 1',
        desc: 'Description here, my name robot. I am 21 years old. I work as a robotic',
        react:<div style={{display:"flex",marginTop:"80px"}}>
                <RecommendRoundedIcon style={{paddingTop:"0px",fontSize:"33px"}}/><p style={{marginLeft:"5px"}}>999</p>
                <ChatBubbleRoundedIcon style={{paddingTop:"3px",fontSize:"30px",marginLeft:"10px"}}/><p style={{marginLeft:"5px"}}>168</p>
              </div>
    },
    {
        src: 'https://www.verdict.co.uk/wp-content/uploads/2021/04/shutterstock_1583248045.jpg',
        name: 'Video 2',
        desc: 'Description here, my name robot. I am 21 years old. I work as a robotic',
        react:<div style={{display:"flex",marginTop:"80px"}}>
                <RecommendRoundedIcon style={{paddingTop:"0px",fontSize:"33px"}}/><p style={{marginLeft:"5px"}}>999</p>
                <ChatBubbleRoundedIcon style={{paddingTop:"3px",fontSize:"30px",marginLeft:"10px"}}/><p style={{marginLeft:"5px"}}>168</p>
              </div>
    },
    {
        src: 'https://www.verdict.co.uk/wp-content/uploads/2021/04/shutterstock_1583248045.jpg',
        name: 'Video 3',
        desc: 'Description here, my name robot. I am 21 years old. I work as a robotic',
        react:<div style={{display:"flex",marginTop:"80px"}}>
                <RecommendRoundedIcon style={{paddingTop:"0px",fontSize:"33px"}}/><p style={{marginLeft:"5px"}}>999</p>
                <ChatBubbleRoundedIcon style={{paddingTop:"3px",fontSize:"30px",marginLeft:"10px"}}/><p style={{marginLeft:"5px"}}>168</p>
              </div>
    },
    {
        src: 'https://www.verdict.co.uk/wp-content/uploads/2021/04/shutterstock_1583248045.jpg',
        name: 'Video 4',
        desc: 'Description here, my name robot. I am 21 years old. I work as a robotic',
        react:<div style={{display:"flex",marginTop:"80px"}}>
                <RecommendRoundedIcon style={{paddingTop:"0px",fontSize:"33px"}}/><p style={{marginLeft:"5px"}}>999</p>
                <ChatBubbleRoundedIcon style={{paddingTop:"3px",fontSize:"30px",marginLeft:"10px"}}/><p style={{marginLeft:"5px"}}>168</p>
              </div>
    },
    {
        src: 'https://www.verdict.co.uk/wp-content/uploads/2021/04/shutterstock_1583248045.jpg',
        name: 'Video 5',
        desc: 'Description here, my name robot. I am 21 years old. I work as a robotic',
        react:<div style={{display:"flex",marginTop:"80px"}}>
                <RecommendRoundedIcon style={{paddingTop:"0px",fontSize:"33px"}}/><p style={{marginLeft:"5px"}}>999</p>
                <ChatBubbleRoundedIcon style={{paddingTop:"3px",fontSize:"30px",marginLeft:"10px"}}/><p style={{marginLeft:"5px"}}>168</p>
              </div>
    },
    {
        src: 'https://www.verdict.co.uk/wp-content/uploads/2021/04/shutterstock_1583248045.jpg',
        name: 'Video 6',
        desc: 'Description here, my name robot. I am 21 years old. I work as a robotic',
        react:<div style={{display:"flex",marginTop:"80px"}}>
                <RecommendRoundedIcon style={{paddingTop:"0px",fontSize:"33px"}}/><p style={{marginLeft:"5px"}}>999</p>
                <ChatBubbleRoundedIcon style={{paddingTop:"3px",fontSize:"30px",marginLeft:"10px"}}/><p style={{marginLeft:"5px"}}>168</p>
              </div>
    },
    {
        src: 'https://www.verdict.co.uk/wp-content/uploads/2021/04/shutterstock_1583248045.jpg',
        name: 'Video 7',
        desc: 'Description here, my name robot. I am 21 years old. I work as a robotic',
        react:<div style={{display:"flex", marginTop:"80px"}}>
                <RecommendRoundedIcon style={{paddingTop:"0px",fontSize:"33px"}}/><p style={{marginLeft:"5px"}}>999</p>
                <ChatBubbleRoundedIcon style={{paddingTop:"3px",fontSize:"30px",marginLeft:"10px"}}/><p style={{marginLeft:"5px"}}>168</p>
              </div>
    },
    {
        src: 'https://www.verdict.co.uk/wp-content/uploads/2021/04/shutterstock_1583248045.jpg',
        name: 'Video 8',
        desc: 'Description here, my name robot. I am 21 years old. I work as a robotic',
        react:<div style={{display:"flex",marginTop:"80px"}}>
                <RecommendRoundedIcon style={{paddingTop:"0px",fontSize:"33px"}}/><p style={{marginLeft:"5px"}}>999</p>
                <ChatBubbleRoundedIcon style={{paddingTop:"3px",fontSize:"30px",marginLeft:"10px"}}/><p style={{marginLeft:"5px"}}>168</p>
              </div>
    },
];
export default function product() {
    const [query, setQuery] = useState("");
    const handleOnChange = (e) => {
        console.log(e.target.value)
        setQuery(e.target.value)
    }
    return (
        <div style={{marginTop:"10px"}}>
            <div style={{display:"flex",justifyContent:"flex-end"}}>
                <TextField onChange={handleOnChange}
                    label="Search Here" variant="outlined" />

            </div>
            <Grid container spacing={3}>
                {
                    items
                        .filter((item) => item.name.includes(query))
                        .map((item, index) => {
                            return (
                                <Grid key={index}
                                    item xs={12}
                                    sm={6}
                                    md={3}
                                >
                                    <ProductCard
                                        avatar={item.avatar}
                                        src={item.src}
                                        name={item.name}
                                        desc={item.desc}
                                        react={item.react}
                                    />
                                </Grid>
                            )
                        })
                }
                {
                    items.filter((item) => item.name.includes(query)).length === 0 && (<h1 style={{ marginLeft: "80%" }} >Unknow Video</h1>)
                }
            </Grid>

        </div>
    )
}