import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import UserAPI from "../../Services/UserServices/UserAPI.js";
import { useNavigate } from "react-router-dom";
import { TextField } from "@material-ui/core";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import DriverDialog from "./DriverDialog";
import { useUserValidation } from "../../CustomHooks/useUserValidation";

const ProfileComponent = () => {
  const [user, setUser] = useState([]);
  const [errorText, setErrorText] = useState("");
  const [dialogOpen, setDialogOpen] = useState("");
  const navigate = useNavigate();
  var isValid = useUserValidation();

  useEffect(() => {
    if (!isValid) {
      navigate("/");
    }
    UserAPI.GetUser()
      .then((userInfo) => {
        var array = userInfo.data.birthDate.split("T");
        userInfo.data.birthDate = array[0];
        setUser(userInfo.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Grid
        alignItems="center"
        style={{ display: "flex" }}
        container
        direction="column"
      >
        <AccountBoxIcon sx={{ fontSize: 70 }} />
        <TextField
          margin="dense"
          label="Name"
          id="Name"
          variant="filled"
          value={user.name}
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          margin="dense"
          label="Surname"
          id="Surname"
          variant="filled"
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            readOnly: true,
          }}
          value={user.surname}
        />
        <TextField
          margin="dense"
          id="Birthdate"
          label="Birthday"
          variant="filled"
          defaultValue="undefined"
          value={user.birthDate}
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          margin="dense"
          label="Phone number"
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            readOnly: true,
          }}
          id="PhoneNumber"
          variant="filled"
          value={user.number}
        />
        <TextField
          margin="dense"
          label="Email"
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            readOnly: true,
          }}
          id="Email"
          variant="filled"
          value={user.email}
        />
        <div style={{ marginTop: "5%" }}>
          <DriverDialog></DriverDialog>
        </div>
      </Grid>
    </div>
  );
};
export default ProfileComponent;
