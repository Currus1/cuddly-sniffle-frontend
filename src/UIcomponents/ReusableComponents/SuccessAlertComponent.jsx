import React, { useState, useEffect } from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const AlertComponent = ({ text }) => {
  const [alertSuccessOpen, setAlertSuccessOpen] = useState(false);

  useEffect(() => {
    setAlertSuccessOpen(true);
  }, []);

  return (
    <div>
      <Collapse in={alertSuccessOpen}>
        <Alert
          severity="success"
          action={
            <IconButton
              aria-label="close"
              onClick={() => {
                setAlertSuccessOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          <AlertTitle style={{ fontWeight: "bold" }}>Success!</AlertTitle>
          {text}
        </Alert>
      </Collapse>
    </div>
  );
};

export default AlertComponent;
