import * as React from "react";
import data from "../../Static/DrawerContent.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import style from "./Styles/HeaderStyle.module.css"

const drawerWidth = "30vh";

export default function TemporaryDrawer() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleNavigation = (navigation) => {
    navigate(navigation);
  };

  const list = (
    <div>
      <Divider />
      <List>
        {data.map((item, index) => (
          <ListItem
            key={index}
            disablePadding
            onClick={() => handleNavigation(item.navigation)}
          >
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  return (
    <div>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="logo"
        onClick={() => setOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <Box
          color="black"
          p={2}
          height="100%"
          width={drawerWidth}
          textAlign="center"
          role="presentation"
          className={style.backgroundStyleDrawer}
        >
          {list}
        </Box>
      </Drawer>
    </div>
  );
}
