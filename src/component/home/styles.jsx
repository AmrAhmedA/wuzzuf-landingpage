import { makeStyles } from "@material-ui/core";
import home1 from "../../assets/background/wzf1-desktop.webp";
import home2 from "../../assets/background/wzf2-desktop.webp";
import home3 from "../../assets/background/wzf3-desktop.webp";
const useStyles = makeStyles((theme) => ({
  bannerContainer: {
    backgroundPositionX: "50%",
    backgroundPositionY: "50%",
    minHeight: "100vh",
    height: "100vh",
    backgroundRepeat: "noRepeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    animation: `$slide-animation 4s linear 0s`,
  },
  "@keyframes slide-animation": {
    "0%": {
      opacity: 0,
      backgroundPositionY: "50%",
    },
    "100%": {
      opacity: 1,
      backgroundPositionY: "60%",
    },
  },

  home1: {
    backgroundImage: `url(${home1})`,
  },
  home2: {
    backgroundImage: `url(${home2})`,
  },
  home3: {
    backgroundImage: `url(${home3})`,
    display: "block",
    top: "0px",
  },
}));

export default useStyles;
