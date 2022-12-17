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
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import styles from "./Styles/RegistryStyle.module.css";
import FooterComponent from "../BaseFooter/FooterComponent";

const theme = createTheme({
  palette: {
    background: {
      default: "#F0F0F0",
    },
  },
});
const numberRegExp = /^((86|\+3706)\d{7})$/;
const strongPasswordRegExp =
  /^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{4,}$/;
const emailRegExp =
  /^([a-zA-Z0-9_\-\.]+)@(([a-zA-Z0-9\-]+\.)+)([a-zA-Z]{2,4}|[0-9]{1,3})$/;
const birthDateRegExp = /^\d{4}-\d{2}-\d{2}$/;
const oldDate = new Date("1900-01-01");
const ageLimitMs = 504997216000; // 16 years ~

export default function RegisterComponent() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
  };

  const handleToggle = () => {
    var today = new Date();
    var inputDate = new Date(birthdate);

    if (
      name.length > 0 &&
      surname.length > 0 &&
      birthdate.match(birthDateRegExp) &&
      email.match(emailRegExp) &&
      phoneNumber.match(numberRegExp) &&
      password.match(strongPasswordRegExp) &&
      password.match(repeatPassword) &&
      open == false &&
      today.getTime() - ageLimitMs > inputDate.getTime() &&
      oldDate.getTime() < inputDate.getTime()
    ) {
      setOpen(!open);
    }
  };

  ValidatorForm.addValidationRule("isAgeNotTooOld", (value) => {
    var inputDate = new Date(value);
    if (
      value.match(birthDateRegExp) &&
      oldDate.getTime() < inputDate.getTime()
    ) {
      return true;
    }
    return false;
  });

  ValidatorForm.addValidationRule("isAgeValid", (value) => {
    var today = new Date();
    var inputDate = new Date(value);
    if (
      value.match(birthDateRegExp) &&
      today.getTime() - ageLimitMs > inputDate.getTime()
    ) {
      return true;
    }
    return false;
  });

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

  ValidatorForm.addValidationRule("IsPasswordStrong", (value) => {
    return value.match(strongPasswordRegExp);
  });

  useEffect(() => {
    if (AuthService.getCurrentUser() != null) {
      navigate("/home");
    }
  }, []);

  const handleSubmit = (event) => {
    setErrorMessage("");
    event.preventDefault();
    AuthService.register(name, surname, email, password, birthdate, phoneNumber)
      .then((success) => {
        handleClose();
        setErrorMessage("");
        setSuccessMessage(success.data.errors);
      })
      .catch((error) => {
        handleClose();
        setSuccessMessage("");
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
          <Avatar sx={{ m: 1 }} style={{ backgroundColor: "#7BC950" }}>
            <HowToRegIcon />
          </Avatar>
          <Typography
            style={{
              color: "#7BC950",
              fontWeight: "bolder",
              fontFamily: "montserrat",
            }}
            component="h1"
            variant="h5"
          >
            Register
          </Typography>
          <ValidatorForm onSubmit={handleSubmit}>
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
              margin="normal"
              fullWidth
              id="name"
              placeholder="Name"
              name="name"
              autoComplete="name"
              autoFocus
              validators={["required"]}
              errorMessages={["Name field is required"]}
              onChange={(event) => setName(event.target.value)}
              value={name}
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
              margin="normal"
              fullWidth
              id="surname"
              placeholder="Surname"
              name="surname"
              autoComplete="surname"
              autoFocus
              validators={["required"]}
              errorMessages={["Surname field is required"]}
              onChange={(event) => setSurname(event.target.value)}
              value={surname}
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
              InputLabelProps={{
                shrink: true,
                style: {
                  color: "black",
                  fontFamily: "montserrat",
                },
              }}
              margin="normal"
              fullWidth
              id="birthDate"
              label="Birth Date"
              name="birthDate"
              autoFocus
              type="date"
              validators={["required", "isAgeValid", "isAgeNotTooOld"]}
              errorMessages={[
                "Birth Date field is required",
                "You have to be at least 16 years old",
                "There is no such old human. Pick correct birth date!",
              ]}
              onChange={(event) => setBirthdate(event.target.value)}
              value={birthdate}
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
              margin="normal"
              fullWidth
              id="phoneNumber"
              placeholder="Phone Number"
              name="Phone Number"
              autoComplete="number"
              autoFocus
              validators={["required", "PhoneNumberValid"]}
              errorMessages={[
                "Phone Number field is required",
                "Phone Number format is wrong",
              ]}
              onChange={(event) => setPhoneNumber(event.target.value)}
              value={phoneNumber}
            />{" "}
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
              margin="normal"
              fullWidth
              name="password2"
              placeholder="Password"
              type="password"
              id="password2"
              validators={["required", "PasswordLength", "IsPasswordStrong"]}
              errorMessages={[
                "Password field is required",
                "Password length has to be at least 8 characters",
                "Password has to contain at least one uppercase, lowercase letter, one digit and special character",
              ]}
              onChange={(event) => setPassword(event.target.value)}
              value={password}
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
              margin="normal"
              fullWidth
              name="repeatPassword"
              placeholder="Confirm Password"
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
            <FormLabel style={{ fontFamily: "montserrat", color: "#7BC950" }}>
              * By clicking "Sign Up", you confirm that you agree to our terms
              of service and privacy policy.
            </FormLabel>
            <div style={{ color: "red" }}>{errorMessage}</div>
            <div style={{ color: "green" }}>{successMessage}</div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                className={styles.registerButton}
                type="submit"
                onClick={handleToggle}
              >
                Sign Up
              </button>
            </div>
            <Link
              href="/login"
              underline="hover"
              variant="string"
              style={{ color: "#47682C" }}
            >
              {"Have an account? Sign in"}
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
      <FooterComponent />
    </ThemeProvider>
  );
}
