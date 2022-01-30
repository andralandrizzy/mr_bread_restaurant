import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import FavStyle from "../styles/favmenu.module.css";
const CustomersFav = () => {
  const foods = [
    {
      id: 1,
      title: "food image one",
      image: "/img/favfood2.png",
      recipe: ["Meat", "Potatoes", "Rice"]
    },
    {
      id: 2,
      title: "food image two",
      image: "/img/favfood3.png",
      recipe: ["Meat", "Potatoes", "Rice"]
    },
    {
      id: 3,
      title: "food image three",
      image: "/img/favfood4.png",
      recipe: ["Meat", "Potatoes", "Rice"]
    },
    {
      id: 4,
      title: "food image four",
      image: "/img/favfood5.png",
      recipe: ["Meat", "Potatoes", "Rice"]
    }
  ];
  return (
    <>
      <Container>
        <Row className={FavStyle.wrapper}>
          {foods.map(food => (
            <Col key={food.id} className={FavStyle.itemWrap}>
              <div className={FavStyle.item}>
                <Image className={FavStyle.foodImg} src={food.image} width= "100" height="100"/>
                <h2 className={FavStyle.title}>{food.title}</h2>
                <p>{food.recipe.map(item => (
                  `${item}, `
                ))}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default CustomersFav;
