import useStyles from "./styles";
import React from "react";
import { useState } from "react";

const LandingPage = () => {
  const [current, setCurrent] = useState(0);
  const classes = useStyles();

  const slides = [
    { name: "home1", image: classes.home1 },
    { name: "home2", image: classes.home2 },
    { name: "home3", image: classes.home3 },
  ];
  const length = slides.length;
  const nextSlider = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  setTimeout(() => {
    nextSlider();
  }, 4000);

  return (
    <React.Fragment>
      <div style={{ position: "relative" }}>
        {slides.map(
          (item, index) =>
            index === current && (
              <div
                key={index}
                className={`${classes.bannerContainer} ${item.image}`}
              ></div>
            )
        )}
      </div>

      <button onClick={nextSlider}>Test</button>
    </React.Fragment>
  );
};

export default LandingPage;
