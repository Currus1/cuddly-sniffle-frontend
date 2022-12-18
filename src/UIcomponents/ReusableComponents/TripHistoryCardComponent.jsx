import styles from "./Styles/BecomeDriverComponentStyle.module.css";
import { Grid } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

export default function TripHistoryCardComponent() {
  const navigate = useNavigate();

  return (
    <div className={styles.profileContainer}>
      <Grid container>
        <Grid item md={6} xs={12}>
          <div className={styles.trip_history_image_container}></div>
        </Grid>
        <Grid item md={6} xs={12}>
          <div>
            <div className={styles.text_container}>
              <h1 style={{ color: "#7BC950" }}>
                It seems like you haven't traveled much
              </h1>{" "}
              <br />
              Enjoyable and cost-effective way to ride
              <div className={styles.button_container}>
                <button
                  onClick={() => {
                    navigate("/home");
                  }}
                  className={styles.learnMoreButton}
                >
                  Join some rides
                </button>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
