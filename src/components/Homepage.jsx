import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Box } from "@mui/system";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";

export default function Homepage() {

    const [fetch, setFetch ] = useState([])

    const fetchnews= () => {
        axios.get('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=933d6307b8e549959250fc702e2102b4')
    .then((response) => {
        console.log(response)
        setFetch(response.data.articles)
    });
    }



  const myStyle = {
    backgroundImage:
      "url('https://storage.googleapis.com/gweb-uniblog-publish-prod/images/HNW_illustrations_v3-29.max-1000x1000.png')",
    height: "90vh",
    marginTop: "-70px",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  const buttonStyle = {
    backgroundColor: "#008CBA" /* Green */,
    border: "none",
    color: "white",
    padding: " 15px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const center = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100px",
   
  }

  const card = {
      display: 'flex',
      padding: '20px',
      display: "inline-block"
  }
  return (
    <Box>
      <div style={myStyle}>
        <h1></h1>
      </div>
      <div style={center} >
      <Button style={buttonStyle} onClick={fetchnews}>Click Here to know latest updates</Button>
      </div>
      {
          fetch.map((value) =>{
              return(
                  <div style={card}>
                  <Card  sx={{ maxWidth: 445 , paddingTop:4 }}>
                  <CardMedia
                  component="img"
                  alt="green iguana"
                  height="240"
                 
                  image={value.urlToImage}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {value.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {value.description}
                  </Typography>
                </CardContent>
                <CardActions>
                <Button size="small">Share</Button>
                <Button size="small" onClick={value.url}>Learn More</Button>
                </CardActions>
                </Card>
                </div>
              )
          })
      }
    </Box>
  );
}
