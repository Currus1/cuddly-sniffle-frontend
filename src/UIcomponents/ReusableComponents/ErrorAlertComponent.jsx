import React, { useState, useEffect } from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import PageNotFound from "../ReusableComponents/PageNotFound";

const AlertComponent = ({ text, wrongPage }) => {
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
          {wrongPage === true ? <LinkToHome /> : null}
        </Alert>
      </Collapse>
      {wrongPage === true ? <PageNotFound /> : null}
    </div>
  );
};

const LinkToHome = () => {
  return (
    <>
      <strong>
        Click here{" "}
        <a
          href="/home"
          style={{
            color: "inherit",
            fontSize: "inherit",
            textDecorationLine: "underline",
          }}
        >
          home
        </a>
      </strong>
    </>
  );
};

export default AlertComponent;
