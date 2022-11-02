import { dividerStyle } from "../styles/muiStyle";
import {
  avatarStyle,
  iconStyle,
  h2Style,
  lowMarginTop,
} from "../styles/ProfileStyle";
import { Grid, Avatar, Typography, Divider } from "@material-ui/core";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function ProfileBannerDesign({ headerText, smallText }) {
  return (
    <Grid align="left">
      <Grid container>
        <Grid item xs={12} md={9}>
          <h2 style={h2Style}>{headerText}</h2>
        </Grid>
        <Grid item xs={12} md={3}>
          <Avatar style={avatarStyle} src="https://sp-ao.shortpixel.ai/client/q_glossy,ret_img,w_300,h_300/https://www.corporatephotographerslondon.com/wp-content/uploads/2021/07/LinkedIn_profile_photo_sample_smiling-300x300.jpg">
            <AccountCircleIcon style={iconStyle} />
          </Avatar>
        </Grid>
        <Grid item xs={12} md={12} style={lowMarginTop}>
          <Typography variant="caption">
            {smallText}
          </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
          <Divider style={dividerStyle} />
        </Grid>
      </Grid>
    </Grid>
  );
}
