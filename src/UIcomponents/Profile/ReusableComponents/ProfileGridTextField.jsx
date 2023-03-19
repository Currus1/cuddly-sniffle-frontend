import { Grid } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import styles from "../Styles/ProfileTextFieldStyle.module.css";

export const ProfileGridTextField = ({ label, id, value }) => {
  return (
    <Grid className={styles.center} item xs={12} sm={12} md={12}>
      <TextField
        InputLabelProps={{
          className: styles.text,
          shrink: true,
        }}
        InputProps={{
          className: styles.text,
          readOnly: true,
        }}
        label={label}
        id={id}
        value={value}
        size="small"
        variant="filled"
        margin="dense"
        onChange={() => {}}
      />
    </Grid>
  );
};
