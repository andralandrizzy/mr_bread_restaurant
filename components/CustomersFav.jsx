import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";

import FavStyle from "../styles/favmenu.module.css";
const CustomersFav = () => {
const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        }
      ]
    };
  const foods = [
    {
      id: 1,
      title: "food image one",
      image: "/img/favfood2.png",
      recipe: ["Meat", "Potatoes", "Rice"],
    },
    {
      id: 2,
      title: "food image two",
      image: "/img/favfood3.png",
      recipe: ["Meat", "Potatoes", "Rice"],
    },
    {
      id: 3,
      title: "food image three",
      image: "/img/favfood4.png",
      recipe: ["Meat", "Potatoes", "Rice"],
    },
    {
      id: 4,
      title: "food image four",
      image: "/img/favfood5.png",
      recipe: ["Meat", "Potatoes", "Rice"],
    },
    {
      id: 5,
      title: "food image five",
      image: "/img/favfood5.png",
      recipe: ["Meat", "Potatoes", "Rice"],
    },
    {
      id: 6,
      title: "food image six",
      image: "/img/favfood5.png",
      recipe: ["Meat", "Potatoes", "Rice"],
    },
  ];
  return (
    <>
      <Container>
          <Slider className={FavStyle.wrapper} {...settings}>
            {foods.map((food) => (
              <div key={food.id} className={FavStyle.item}>
                <div className={FavStyle.imgwrapper}>
                  <Image
                    className={FavStyle.foodImg}
                    src={food.image}
                    layout="fill"
                    alt={food.title}
                  />
                </div>
                <h2 className={FavStyle.title}>{food.title}</h2>
                <p>{food.recipe.map((item) => `${item}, `)}</p>
              </div>
            ))}
          </Slider>
      </Container>
    </>
  );
};

export default CustomersFav;
