import React, { useState, useEffect } from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const AlertComponent = ({ text }) => {
  const [alertErrorOpen, setAlertErrorOpen] = useState(false);

  useEffect(() => {
    setAlertErrorOpen(true);
  }, []);

  return (
    <div>
      <Collapse in={alertErrorOpen}>
        <Alert
          severity="error"
          action={
            <IconButton
              aria-label="close"
              onClick={() => {
                setAlertErrorOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          <AlertTitle style={{ fontWeight: "bold" }}>Error!</AlertTitle>
          {text}
        </Alert>
      </Collapse>
    </div>
  );
};

export default AlertComponent;
