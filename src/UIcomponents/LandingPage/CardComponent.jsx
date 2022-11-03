import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Collapse } from "@mui/material";
import {
  card,
  cardTransparency,
  cardButton,
} from "./Styles/HomePageCardsStyle.js";
import "./Styles/PageStyle.css";

export default function GetARideCardComponent({ cardContent, checked }) {
  return (
    <Collapse in={checked} {...(checked ? { timeout: 500 } : {})}>
      <div style={{ height: "100vh" }}>
        <Card sx={{ maxWidth: 400 }} style={card}>
          <CardMedia
            component="img"
            height="400"
            image={cardContent.image}
            alt="img"
          />
          <div style={cardTransparency}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {cardContent.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {cardContent.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button style={cardButton}>Learn More</Button>
            </CardActions>
          </div>
        </Card>
      </div>
    </Collapse>
  );
}
