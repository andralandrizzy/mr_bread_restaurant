import Image from "next/image";
import menuStyle from "../styles/menu.module.css";
import { Container } from "react-bootstrap";
import Link from "next/link";

const Menu = () => {

  const foodMenu = [
    {
      id: 1,
      price: `$${15.99}`,
      title: "Meal menu plate one",
      image: "/img/vegan-meat-1.jpg",
      recipe: ["Meat", "Potatoes", "Rice", "beef"]
    },
    {
      id: 2,
      price: `$${10.99}`,
      title: "Meal menu plate two",
      image: "/img/menu2.jpeg",
      recipe: ["Chicken", "Mac & Cheese", "Bake potatoe", "Onions"]
    },
    {
      id: 3,
      price: `$${19.99}`,
      title: "Meal menu plate three",
      image: "/img/menu3.jpeg",
      recipe: ["Gritts", "Eggs", "Hashbrown", "steak"]
    },
    {
      id: 4,
      price: `$${12.99}`,
      title: "Meal menu plate four",
      image: "/img/menu4.jpeg",
      recipe: ["Chicken", "Potatoes", "Rice", "Mixed Vegetable"]
    },
    {
      id: 5,
      price: `$${19.99}`,
      title: "Meal menu plate five",
      image: "/img/menu5.jpeg",
      recipe: ["Chicken", "Potatoes", "Rice", "Mixed Vegetable"]
    },
    {
      id: 6,
      price: `$${14.99}`,
      title: "Meal menu plate six",
      image: "/img/menu6.jpeg",
      recipe: ["Chicken", "Potatoes", "Rice", "Mixed Vegetable"]
    },
    {
      id: 7,
      price: `$${14.99}`,
      title: "Meal menu plate seven",
      image: "/img/menu7.jpeg",
      recipe: ["Chicken", "Potatoes", "Rice", "Mixed Vegetable"]
    }
  ];
  return (
    <>
      <div className={menuStyle.wrap}>
          <h1 className={menuStyle.intro}>Our Menu</h1>
        <Container>
          <div className={menuStyle.menuItems}>
            {foodMenu.map( food => (
              <div key={food.id} className={menuStyle.items}>
              <div className={menuStyle.imgWrap}>
                <Image
                  className={menuStyle.img}
                  src={food.image}
                  layout="fill"
                  alt="food menu"
                />
                <div className={menuStyle.price}>{food.price}</div>
              </div>
              <div className={menuStyle.detail}>
                <h1 className={menuStyle.title}>{food.title}</h1>
                <p className={menuStyle.text}>
                  {food.recipe.map((item, i) => (
                    <span key={i}>{item}, </span>
                  ))}
                </p>
                <Link href="/">
                  <a className={menuStyle.btn}>Order now</a>
                </Link>
              </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
    
  );
};

export default Menu;
