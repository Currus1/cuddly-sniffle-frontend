import { buildQueries } from "@testing-library/react";
import React from "react";

const style = {
  backgroundColor: "#0099cc",
  borderTop: "2px solid #0099cc",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  bottom: "0",
  height: "60px",
  width: "100%",
};

const FooterComponent = () => (
  <footer>
    <div style={style}>© 2022 CuRRus Project</div>
  </footer>
);

export default FooterComponent;
