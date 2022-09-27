import { React, useState, useEffect } from "react";
import HTTPservice from "../Services/HTTPservice";

const BackendComponent = () => {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    HTTPservice.getMessage()
      .then((response) => {
        setMessage(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      Frontend (aka React): Hello, backend
      <br></br>
      <br></br>
      Backend (aka ASP.NET): {message}
    </div>
  );
};

export default BackendComponent;
