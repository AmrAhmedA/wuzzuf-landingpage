import React, { Component } from "react";
import { render } from "react-dom";
// import ImageSlide from './Hello';
import "./style.css";
const imgUrls = [1, 2, 3];

class ImageSlide extends Component {
  render() {
    const { url, init } = this.props;
    return (
      <div className={`pic${url} init`}>
        <div class="front"></div>
        <div class="back"></div>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0,
    };
  }
  nextSlide() {
    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const index = (currentImageIndex + 1) % (lastIndex + 1);

    // @See https://css-tricks.com/restart-css-animation/
    const elm = document
      .getElementById("root")
      .querySelector('[class^="pic"],[class*=" pix"]');
    elm.className = `pic${index + 1}`;
    const newone = elm.cloneNode(true);
    elm.parentNode.replaceChild(newone, elm);

    this.setState({
      currentImageIndex: index,
    });
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.nextSlide(); //this function change the index state.
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <ImageSlide url={imgUrls[this.state.currentImageIndex]} />;
  }
}

render(<App />, document.getElementById("root"));
