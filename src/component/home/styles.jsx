import { makeStyles } from "@material-ui/core";
import home1 from "../../assets/background/wzf1-desktop.webp";
import home2 from "../../assets/background/wzf2-desktop.webp";
import home3 from "../../assets/background/wzf3-desktop.webp";

const useStyles = makeStyles((theme) => ({
  bannerContainer: {
    // position: "absolute",
    backgroundPositionX: "50%",
    backgroundPositionY: "50%",
    minHeight: "100vh",
    width: "100%",
    height: "100vh",
    backgroundRepeat: "noRepeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    willChange: "opacity",
    animation: `$slide-animation 8s linear infinite`,
  },
  "@keyframes slide-animation": {
    "0%": {
      opacity: 0,
      backgroundPositionY: "50%",
    },
    "33%": {
      opacity: 1,
    },
    "66%": {
      opacity: 1,
    },
    "100%": {
      opacity: 0,
      backgroundPositionY: "65%",
    },
  },
  slide1: {
    // animationDelay: "6s",
    backgroundImage: `url(${home1})`,
    // zIndex: 3,
  },
  slide2: {
    // opacity: 0,
    // animationDelay: "3s",
    backgroundImage: `url(${home2})`,
    // zIndex: 2,
  },
  slide3: {
    // opacity: 0,
    // animationDelay: "0s",
    backgroundImage: `url(${home3})`,
    // zIndex: 1,
  },
}));

export default useStyles;
