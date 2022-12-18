import styles from "./Styles/BecomeDriverComponentStyle.module.css";
import { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import UserAPI from "../../Services/UserServices/UserAPI";

const driverLicenseRegExp = /^\d{8}$/;
export default function ProfileCardComponent() {
  const navigate = useNavigate();
  const [status, setStatus] = useState("User");

  useEffect(() => {
    UserAPI.GetUser().then((userInfo) => {
      if (
        userInfo.data.driversLicense != null &&
        userInfo.data.driversLicense.match(driverLicenseRegExp)
      ) {
        setStatus("Driver");
      } else {
        setStatus("User");
      }
    });
  }, []);

  return (
    <div className={styles.profileContainer}>
      <Grid container>
        <Grid item md={6} xs={12}>
          <div className={styles.profile_image_container}></div>
        </Grid>
        <Grid item md={6} xs={12}>
          <div>
            <div className={styles.text_container}>
              <h1 style={{ color: "#7BC950" }}>Uniqueness</h1> <br />
              Every profile is unique and has something special to offer.
              <div className={styles.button_container}>
                {status == "Driver" ? (
                  <button
                    onClick={() => {
                      navigate("/planning");
                    }}
                    className={styles.learnMoreButton}
                  >
                    Create some rides
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
