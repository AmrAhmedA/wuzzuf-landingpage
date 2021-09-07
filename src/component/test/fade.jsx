import home1 from "../../assets/background/wzf1-desktop.webp";
import home2 from "../../assets/background/wzf2-desktop.webp";
import home3 from "../../assets/background/wzf3-desktop.webp";
import "./fade.scss";
const PureFadeCss = () => {
  return (
    <div class="image-container">
      <img src={home1} alt="" />
      <img src={home2} alt="" />
      <img src={home3} alt="" />
    </div>
  );
};

export default PureFadeCss;
