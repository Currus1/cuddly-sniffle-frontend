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

const theme = createTheme({
  palette: {
    background: {
      default: "#F0F0F0",
    },
  },
});

export default function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (AuthService.getCurrentUser() != null) {
      navigate("/home");
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    AuthService.login(email, password)
      .then(() => {
        navigate("/profile");
      })
      .catch((error) => {
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
            >
              Sign In
            </Button>
            <Link href="/register" underline="hover" variant="string">
              {"Don't have an account? Sign Up"}
            </Link>
          </ValidatorForm>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
