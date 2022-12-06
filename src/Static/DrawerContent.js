import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";

const data = [
    {
      name: "Home",
      icon: <HomeIcon />,
      navigation: "/home",
    },
    {
      name: "Profile",
      icon: <AccountCircleIcon />,
      navigation: "/profile",
    },
    {
      name: "Trip History",
      icon: <WorkHistoryIcon />,
      navigation: "/trips/history",
    },
];

export default data;