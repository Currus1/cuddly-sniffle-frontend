import React from "react";
import { useState, useEffect } from "react";
import { AppBar, IconButton } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import Toolbar from "@mui/material/Toolbar";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import { Link as Scroll } from "react-scroll";
import styles from "./Styles/PageStyle.module.css";
import headerStyles from "./Styles/LandingHeaderStyle.module.css"
import currus from "../../Images/logo/currus_long_1.png"

const HeaderComponent = () => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={styles.page_container} id="header">
      <AppBar className={headerStyles.appBar} elevation={0}>
        <Toolbar>
          <img src={currus} className={headerStyles.logo}></img>
          <IconButton>
            <SortIcon className={headerStyles.sortIcon}></SortIcon>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedheight={50}
      >
        <div className={headerStyles.centerText}>
          <h1 className={headerStyles.fontSize3}>Welcome</h1>
          <Scroll to="home-page-cards-component" smooth={true}>
            <IconButton>
              <ExpandMoreIcon className={headerStyles.fontSize2} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
};
export default HeaderComponent;
