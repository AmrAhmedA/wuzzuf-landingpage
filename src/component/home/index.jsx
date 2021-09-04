import useStyles from "./styles";
import React from "react";
// import { useState } from "react";

const LandingPage = () => {
  //   const [current, setCurrent] = useState(0);
  const classes = useStyles();

  const slides = [
    { name: "home1", image: classes.slide1 },
    { name: "home2", image: classes.slide2 },
    { name: "home3", image: classes.slide3 },
  ];
  //   const length = slides.length;
  //   const nextSlider = () => {
  //     setCurrent(current === length - 1 ? 0 : current + 1);
  //   };

  //   setTimeout(() => {
  //     nextSlider();
  //   }, 4000);

  return (
    <React.Fragment>
      {slides.map((item, index) => (
        <div
          key={index}
          className={`${classes.bannerContainer} ${item.image}`}
        ></div>
      ))}

      {/* <button onClick={nextSlider}>Test</button> */}
    </React.Fragment>
  );
};

export default LandingPage;
