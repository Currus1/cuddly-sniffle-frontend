import React, { useState, useEffect } from "react";
import AuthService from "../../Services/AuthServices/auth.service";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { FormLabel } from "@mui/material";

const theme = createTheme({
  palette: {
    background: {
      default: "#F0F0F0",
    },
  },
});
var numberRegExp = /^((86|\+3706)\d{7})$/g;

export default function RegisterComponent() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [number, setNumber] = useState("");

  const navigate = useNavigate();

  ValidatorForm.addValidationRule("isPasswordMatch", (value) => {
    if (value !== password) {
      return false;
    }
    return true;
  });

  ValidatorForm.addValidationRule("PasswordLength", (value) => {
    if (value.length < 8) {
      return false;
    }
    return true;
  });

  ValidatorForm.addValidationRule("PhoneNumberValid", (value) => {
    return value.match(numberRegExp);
  });

  useEffect(() => {
    if (AuthService.getCurrentUser() != null) {
      navigate("/");
    }
  }, []);

  const handleSubmit = (event) => {
    setErrorMessage("");
    event.preventDefault();
    AuthService.register(name, surname, email, password, birthDate, number)
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
            <HowToRegIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <ValidatorForm onSubmit={handleSubmit}>
            <TextValidator
              margin="normal"
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
              validators={["required"]}
              errorMessages={["Name field is required"]}
              onChange={(event) => setName(event.target.value)}
              value={name}
            />
            <TextValidator
              margin="normal"
              fullWidth
              id="surname"
              label="Surname"
              name="surname"
              autoComplete="surname"
              autoFocus
              validators={["required"]}
              errorMessages={["Surname field is required"]}
              onChange={(event) => setSurname(event.target.value)}
              value={surname}
            />
            <TextValidator
              InputLabelProps={{ shrink: true }}
              margin="normal"
              fullWidth
              id="birthDate"
              label="Birth Date"
              name="birthDate"
              autoFocus
              type="date"
              validators={["required"]}
              errorMessages={["Surname field is required"]}
              onChange={(event) => setBirthDate(event.target.value)}
              value={birthDate}
            />
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
              id="number"
              label="Phone Number"
              name="number"
              autoComplete="number"
              autoFocus
              validators={["required", "PhoneNumberValid"]}
              errorMessages={[
                "Phone Number field is required",
                "Phone Number format is wrong",
              ]}
              onChange={(event) => setNumber(event.target.value)}
              value={number}
            />{" "}
            <TextValidator
              margin="normal"
              fullWidth
              name="password2"
              label="Password"
              type="password"
              id="password2"
              validators={["required", "PasswordLength"]}
              errorMessages={[
                "Password field is required",
                "Password length has to be at least 8 characters",
              ]}
              onChange={(event) => setPassword(event.target.value)}
              value={password}
            />
            <TextValidator
              margin="normal"
              fullWidth
              name="repeatPassword"
              label="Confirm Password"
              type="password"
              id="repeatPassword"
              validators={["required", "isPasswordMatch"]}
              errorMessages={[
                "Confirm Password field is required",
                "Passwords do not match",
              ]}
              onChange={(event) => setRepeatPassword(event.target.value)}
              value={repeatPassword}
            />
            <FormLabel>
              * By clicking "Sign Up", you confirm that you agree to our terms
              of service and privacy policy.
            </FormLabel>
            <div style={{ color: "red" }}>{errorMessage}</div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Link href="/login" underline="hover" variant="string">
              {"Have an account? Log in"}
            </Link>
          </ValidatorForm>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
