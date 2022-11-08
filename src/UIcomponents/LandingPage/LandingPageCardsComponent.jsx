import React, { useState, useEffect } from "react";
import CardComponent from "./CardComponent";
import CardContent from "../../Static/CardContent";
import useWindowPosition from "../../CustomHooks/useWindowPosition";
import { area } from "./Styles/HomePageCardsStyle.js";

const HomePageCardsComponent = () => {
  const checked = useWindowPosition("header");
  return (
    <div id="home-page-cards-component" style={area}>
      <CardComponent cardContent={CardContent[0]} checked={checked} />
      <CardComponent cardContent={CardContent[1]} checked={checked} />
      <CardComponent cardContent={CardContent[2]} checked={checked} />
    </div>
  );
};

export default HomePageCardsComponent;
