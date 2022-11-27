import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import DrawerComponent from "./DrawerComponent";
import styles from "./Styles/HeaderStyle.module.css";

const HeaderComponent = () => {
  const [open, setOpen] = useState(false);

  const ToggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box>
      <AppBar position="static">
        <Toolbar className={styles.header_bgcolor}>
          <DrawerComponent></DrawerComponent>
          <Typography color="inherit">CURRUS</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default HeaderComponent;
