import styles from "./Styles/ProfileStyle.module.css";
import { Grid, Avatar, Typography, Divider } from "@material-ui/core";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function ProfileBannerDesign({ headerText, smallText }) {
  return (
    <Grid align="left">
      <Grid container>
        <Grid item xs={12} md={9}>
          <h2 className={styles.h2Style}>{headerText}</h2>
        </Grid>
        <Grid item xs={12} md={3}>
          <Avatar
            className={styles.avatarStyle}
            src="https://sp-ao.shortpixel.ai/client/q_glossy,ret_img,w_300,h_300/https://www.corporatephotographerslondon.com/wp-content/uploads/2021/07/LinkedIn_profile_photo_sample_smiling-300x300.jpg"
          >
            <AccountCircleIcon className={styles.iconStyle} />
          </Avatar>
        </Grid>
        <Grid item xs={12} md={12} className={styles.lowMarginTop}>
          <Typography variant="caption">{smallText}</Typography>
        </Grid>
        <Grid item xs={12} md={12}>
          <Divider className={styles.dividerStyle} />
        </Grid>
      </Grid>
    </Grid>
  );
}
