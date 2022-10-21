import { Grid, Button, Divider } from "@material-ui/core";
import { dividerStyle, buttonStyle } from "../styles/CustomLowButtonStyle";

export default function CustomLowButton({ buttonText, onClickEvent }) {
  return (
    <Grid align="right">
        <Divider style={dividerStyle}></Divider>
      <Button onClick={onClickEvent} style={buttonStyle}>{buttonText}</Button>
    </Grid>
  );
}
