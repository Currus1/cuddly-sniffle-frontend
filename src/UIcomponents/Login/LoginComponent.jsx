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
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1 }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <ValidatorForm onSubmit={handleSubmit}>
            <TextValidator
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              validators={["required", "isEmail"]}
              errorMessages={["Email field is required", "Email is not valid"]}
              onChange={(event) => setEmail(event.target.value)}
              value={email}
            />
            <TextValidator
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              validators={["required"]}
              errorMessages={["Password field is required"]}
              onChange={(event) => setPassword(event.target.value)}
              value={password}
            />
            <div style={{ color: "red" }}>{errorMessage}</div>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleToggle}
            >
              Sign In
            </Button>
            <Link href="/register" underline="hover" variant="string">
              {"Don't have an account? Sign Up"}
            </Link>
          </ValidatorForm>
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
            onClick={handleClose}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
