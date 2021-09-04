import { makeStyles } from "@material-ui/core";
import home1 from "../../assets/background/wzf1-desktop.webp";
import home2 from "../../assets/background/wzf2-desktop.webp";
import home3 from "../../assets/background/wzf3-desktop.webp";
const useStyles = makeStyles((theme) => ({
  bannerContainer: {
    position: "absolute",
    backgroundPositionX: "50%",
    backgroundPositionY: "50%",
    minHeight: "100vh",
    width: "100%",
    height: "100vh",
    backgroundRepeat: "noRepeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    animation: `$slide-animation 4s linear infinite`,
  },
  "@keyframes slide-animation": {
    from: {
      opacity: 0,
      backgroundPositionY: "50%",
    },
    "50%": {
      opacity: 1,
    },
    to: {
      opacity: 0,
      backgroundPositionY: "65%",
    },
  },
  slide1: {
    backgroundImage: `url(${home1})`,
    zIndex: 3,
  },
  slide2: {
    backgroundImage: `url(${home2})`,
    zIndex: 2,
  },
  slide3: {
    backgroundImage: `url(${home3})`,
    zIndex: 1,
  },
}));

export default useStyles;
