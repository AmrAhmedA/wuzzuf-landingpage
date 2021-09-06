import useStyles from "./styles";
import _ from "lodash";
import React from "react";
import { useState, useEffect } from "react";
import { useTransition, animated, config } from "react-spring";

const LandingPage = () => {
  const [current, setCurrent] = useState(0);
  const classes = useStyles();

  const slides = [
    { id: 0, image: classes.slide1 },
    { id: 1, image: classes.slide2 },
    { id: 2, image: classes.slide3 },
  ];

  const length = slides.length;
  const nextSlider = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  useEffect(() =>
    setTimeout(() => {
      nextSlider();
    }, 4000)
  );

  const test = _.map(slides, "id");

  console.log(test);

  const transitions = useTransition(slides[current], test, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { mass: 1, tension: 500, friction: 550 },
  });
  return (
    <React.Fragment>
      {/* {slides.map((item, index) => (
        <div
          key={index}
          className={`${classes.bannerContainer} ${item.image}`}
        ></div>
      ))} */}
      <div
        className={`${classes.bannerContainer} ${slides[current].image}`}
      ></div>
      {/* {console.log(current)} */}
      {/* {/* <button onClick={nextSlider}>Test</button> */}
    </React.Fragment>
  );
};

export default LandingPage;
