import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import style from "./Styles/HomePageCardsStyle.module.css";

export default function GetARideCardComponent({ cardContent, checked }) {
  return (
    <div style={{ height: "100vh" }}>
      <Card sx={{ maxWidth: 450 }} className={style.card}>
        <CardMedia
          component="img"
          height="400"
          image={cardContent.image}
          alt="img"
        />
        <div className={style.cardTransparency}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {cardContent.title}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {cardContent.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button>Learn More</Button>
          </CardActions>
        </div>
      </Card>
    </div>
  );
}
