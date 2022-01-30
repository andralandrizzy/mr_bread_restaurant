import FeaturedStyle from "../styles/featured.module.css";
import { Carousel, Image } from "react-bootstrap";
import Navbar from "./Navbar";
import TopNav from "./TopNav";

const Featured = () => {
  const sliderContents = [
    {
      id: 1,
      text: "slider restaurant food image one",
      image: "/img/banner.jpg",
    },
    {
      id: 2,
      text: "slider restaurant food image two",
      image: "/img/banner1.jpeg",
    },
    {
      id: 3,
      text: "slider restaurant food image three",
      image: "/img/banner2.jpeg",
    },
    {
      id: 4,
      text: "slider restaurant food image four",
      image: "/img/banner3.jpeg",
    }
  ];
  return (
    <Carousel fade className={FeaturedStyle.carousel}>
      {sliderContents.map((content, id) => (
        <Carousel.Item key={id}>
          <div className={FeaturedStyle.overlay}>
            <Image
              className="d-block w-100 img"
              src={content.image}
              alt={content.text}
            />
            <Carousel.Caption className={FeaturedStyle.caption}>
              <Image className={FeaturedStyle.img_wrap} src="/img/logo.PNG" alt="" height="120" width="120" />
              <h1>{content.text}</h1>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Featured;
