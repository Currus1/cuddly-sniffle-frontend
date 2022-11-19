import React from "react";
import { useState, useEffect } from "react";
import { AppBar, IconButton } from "@material-ui/core";
import "../Styles/PageStyle.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import { Link as Scroll } from "react-scroll";
import {
  appBar,
  centerText,
  fontSize3,
  fontSize2,
  headerBanner
} from "./Styles/LandingHeaderStyle.js";
import HeaderComponent from "../BaseHeader/HeaderComponent";

const LandingHeaderComponent = () => {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className="page-container" id="header">
      <AppBar style={appBar} elevation={0}>
        <HeaderComponent />
      </AppBar>
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedheight={50}
      >
        
        <div style={centerText}>
          <h1 style={fontSize3}>Welcome!</h1>
          <Scroll to="home-page-cards-component" smooth={true}>
            <IconButton>
              <ExpandMoreIcon style={fontSize2} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
};
export default LandingHeaderComponent;
