import * as React from "react";
import data from "../../Static/DrawerContent.js";
import { useState, useEffect } from "react";
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
import style from "./Styles/HeaderStyle.module.css";
import LogoutIcon from "@mui/icons-material/Logout";
import AuthService from "../../Services/AuthServices/auth.service.js";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import UserAPI from "../../Services/UserServices/UserAPI.js";

const driverLicenseRegExp = /^\d{8}$/;
const drawerWidth = "30vh";

export default function TemporaryDrawer() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    UserAPI.GetUser()
      .then((userInfo) => {
        if (
          userInfo.data.driversLicense != null &&
          userInfo.data.driversLicense.match(driverLicenseRegExp)
        ) {
          setStatus("Driver");
        } else {
          setStatus("User");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleNavigation = (navigation) => {
    navigate(navigation);
  };

  const handleLogOut = () => {
    AuthService.logout();
    navigate("/");
    window.location.reload();
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
        {status == "Driver" ? (
          <ListItem
            disablePadding
            onClick={() => {
              navigate("/planning");
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                <AddCircleOutlineIcon></AddCircleOutlineIcon>
              </ListItemIcon>
              <ListItemText>Create a trip</ListItemText>
            </ListItemButton>
          </ListItem>
        ) : null}
        <ListItem disablePadding onClick={() => handleLogOut()}>
          <ListItemButton>
            <ListItemIcon>
              <LogoutIcon></LogoutIcon>
            </ListItemIcon>
            <ListItemText>Sign out</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </div>
  );

  return (
    <div>
      <IconButton
        style={{ color: "black", alignContent: "end", alignItems: "end" }}
        size="large"
        edge="start"
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
          style={{ backgroundColor: "#F0F0F0" }}
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
