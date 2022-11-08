import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const data = [
    {
      name: "Home",
      icon: <HomeIcon />,
      navigation: "/trips",
    },
    {
      name: "Profile",
      icon: <AccountCircleIcon />,
      navigation: "/profile",
    },
    {
      name: "Create a trip",
      icon: <AddCircleOutlineIcon />,
      navigation: "/planning",
    },
    {
      name: "Trip History",
      icon: <WorkHistoryIcon />,
      navigation: "/trips/history",
    },
];

export default data;