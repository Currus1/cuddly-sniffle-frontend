import React from "react";
import CardComponent from "./CardComponent";
import CardContent from "../../Static/CardContent";
import useWindowPosition from "../../CustomHooks/useWindowPosition";
import style from "./Styles/HomePageCardsStyle.module.css";

const HomePageCardsComponent = () => {
  const checked = useWindowPosition("header");
  return (
    <div id="home-page-cards-component" className={style.area}>
      <CardComponent cardContent={CardContent[0]} checked={checked} />
      <CardComponent cardContent={CardContent[1]} checked={checked} />
      <CardComponent cardContent={CardContent[2]} checked={checked} />
    </div>
  );
};

export default HomePageCardsComponent;
