import React, { useState, useEffect } from "react";
import AuthService from "../../Services/AuthServices/auth.service";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import FooterComponent from "../BaseFooter/FooterComponent";
import styles from "./Styles/LoginComponentStyle.module.css";

const theme = createTheme({
  palette: {
    background: {
      default: "#F0F0F0",
    },
  },
});

const emailRegExp =
  /@^([a-zA-Z0-9_\-\.]+)@(([a-zA-Z0-9\-]+\.)+)([a-zA-Z]{2,4}|[0-9]{1,3})$/g;

export default function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleToggle = () => {
    if (email.match(emailRegExp) && password.length > 0) {
      setOpen(!open);
    }
  };

  useEffect(() => {
    if (AuthService.getCurrentUser() != null) {
      navigate("/home");
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    AuthService.login(email, password)
      .then(() => {
        handleClose();
        navigate("/home");
      })
      .catch((error) => {
        handleClose();
        setErrorMessage(error.response.data.errors);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          marginTop: "8vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "25vh",
        }}
      >
        <Avatar sx={{ m: 1, backgroundColor: "#7BC950" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography style={{ color: "#7BC950" }} component="h1" variant="h5">
          Sign in
        </Typography>
        <ValidatorForm
          onSubmit={handleSubmit}
          style={{
            width: "30vh",
          }}
        >
          <TextValidator
            sx={{
              ".MuiOutlinedInput-notchedOutline": {
                borderColor: "#7BC950",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#47682C",
              },
              "&:hover .Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#47682C !important",
              },
              ".Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#7BC950 !important",
              },
            }}
            InputProps={{
              style: {
                color: "black",
                fontFamily: "montserrat",
              },
            }}
            placeholder="Email Address"
            margin="normal"
            fullWidth
            id="email"
            name="email"
            autoComplete="email"
            validators={["required", "isEmail"]}
            errorMessages={["Email field is required", "Email is not valid"]}
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
          <TextValidator
            sx={{
              ".MuiOutlinedInput-notchedOutline": {
                borderColor: "#7BC950",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#47682C",
              },
              "&:hover .Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#47682C !important",
              },
              ".Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#7BC950 !important",
              },
            }}
            InputProps={{
              style: {
                color: "black",
                fontFamily: "montserrat",
              },
            }}
            placeholder="Password"
            margin="normal"
            fullWidth
            name="password"
            type="password"
            id="password"
            validators={["required"]}
            errorMessages={["Password field is required"]}
            onChange={(event) => setPassword(event.target.value)}
            value={password}
          />
          <div style={{ color: "red" }}>{errorMessage}</div>

          <div
            style={{
              justifyContent: "center",
              display: "flex",
            }}
          >
            <button className={styles.loginButton} onClick={handleToggle}>
              Sign In
            </button>
          </div>
        </ValidatorForm>
        <Link
          href="/register"
          underline="hover"
          variant="string"
          style={{ color: "#47682C" }}
        >
          {"Don't have an account? Sign Up"}
        </Link>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          onClick={handleClose}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </Box>
      <FooterComponent />
    </ThemeProvider>
  );
}
