import useStyles from "./styles";
// import _ from "lodash";
import React from "react";
import { useState, useEffect } from "react";
import { useTransition, animated } from "react-spring";

const slides = [
  {
    id: 0,
    url: "https://raw.githubusercontent.com/AmrAhmedA/wuzzuf-landingpage/master/src/assets/background/wzf1-desktop.webp",
  },
  {
    id: 1,
    url: "https://raw.githubusercontent.com/AmrAhmedA/wuzzuf-landingpage/master/src/assets/background/wzf2-desktop.webp",
  },
  {
    id: 2,
    url: "https://raw.githubusercontent.com/AmrAhmedA/wuzzuf-landingpage/master/src/assets/background/wzf3-desktop.webp",
  },
];
const LandingPage = () => {
  const [current, setCurrent] = useState(0);
  const classes = useStyles();

  // const slides = [
  //   { id: 0, image: classes.slide1 },
  //   { id: 1, image: classes.slide2 },
  //   { id: 2, image: classes.slide3 },
  //   { id: 2, image: classes.slide3 },
  // ];

  // const length = slides.length;
  // const nextSlider = () => {
  //   setCurrent(current === length - 1 ? 0 : current + 1);
  // };
  // useEffect(() =>
  //   setTimeout(() => {
  //     nextSlider();
  //   }, 4000)
  // );
  const transitions = useTransition(slides[current], (item) => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { mass: 2, tension: 600, friction: 800 },
  });
  useEffect(
    () => void setInterval(() => setCurrent((state) => (state + 1) % 3), 6000),
    []
  );

  return (
    <React.Fragment>
      {console.log(current)}
      {transitions.map(({ item, props, key }) => (
        <animated.div
          key={key}
          className={classes.bannerContainer}
          style={{ ...props, backgroundImage: `url("${item.url}")` }}
        />
      ))}
      {/* {slides.map((item, index) => (
        <div
          key={index}
          className={`${classes.bannerContainer} ${item.image}`}
        ></div>
      ))} */}
      {/* <div
        className={`${classes.bannerContainer} ${slides[current].image}`}
      ></div> */}

      {/* {/* <button onClick={nextSlider}>Test</button> */}
    </React.Fragment>
  );
};

export default LandingPage;
