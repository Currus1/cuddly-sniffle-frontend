import React from "react";
import { useState, useEffect } from "react";
import { AppBar, IconButton } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import styles from "./Styles/PageStyle.module.css";
import Toolbar from "@mui/material/Toolbar";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import { Link as Scroll } from "react-scroll";
import {
  titleHeader,
  titleText,
  appBar,
  sortIcon,
  centerText,
  fontSize3,
  fontSize2,
} from "./Styles/LandingHeaderStyle.js";

const HeaderComponent = () => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={styles.page_container} id="header">
      <AppBar style={appBar} elevation={0}>
        <Toolbar>
          <h1 style={titleHeader}>
            C<span style={titleText}>UR</span>RUS
          </h1>
          <IconButton>
            <SortIcon style={sortIcon}></SortIcon>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedheight={50}
      >
        <div style={centerText}>
          <h1 style={fontSize3}>Welcome</h1>
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
export default HeaderComponent;
