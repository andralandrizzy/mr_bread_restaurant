import Image from "next/image";
import menuStyle from "../styles/menu.module.css";
import { Container } from "react-bootstrap";
import Link from "next/link";

const Menu = () => {
  return (
    <>
      <div className={menuStyle.wrap}>
          <h1 className={menuStyle.intro}>Our Menu</h1>
        <Container>
          <div className={menuStyle.menuItems}>
            <div className={menuStyle.items}>
              <div className={menuStyle.imgWrap}>
                <Image
                  className={menuStyle.img}
                  src="/img/vegan-meat-1.jpg"
                  layout="fill"
                  alt="food menu"
                />
                <div className={menuStyle.price}>$10.00</div>
              </div>
              <div className={menuStyle.detail}>
                <h1 className={menuStyle.title}>Meal set 01</h1>
                <p className={menuStyle.text}>
                  Chicken, Tomatoes, Mixed Vegetable
                </p>
                <Link href="/">
                  <a className={menuStyle.btn}>Order now</a>
                </Link>
              </div>
            </div>
            <div className={menuStyle.items}>
              <div className={menuStyle.imgWrap}>
                <Image
                  className={menuStyle.img}
                  src="/img/vegan-meat-1.jpg"
                  layout="fill"
                  alt="food menu"
                />
                <div className={menuStyle.price}>$10.00</div>
              </div>
              <div className={menuStyle.detail}>
                <h1 className={menuStyle.title}>Meal set 01</h1>
                <p className={menuStyle.text}>
                  Chicken, Tomatoes, Mixed Vegetable
                </p>
                <Link href="/">
                  <a className={menuStyle.btn}>Order now</a>
                </Link>
              </div>
            </div>
            <div className={menuStyle.items}>
              <div className={menuStyle.imgWrap}>
                <Image
                  className={menuStyle.img}
                  src="/img/vegan-meat-1.jpg"
                  layout="fill"
                  alt="food menu"
                />
                <div className={menuStyle.price}>$10.00</div>
              </div>
              <div className={menuStyle.detail}>
                <h1 className={menuStyle.title}>Meal set 01</h1>
                <p className={menuStyle.text}>
                  Chicken, Tomatoes, Mixed Vegetable
                </p>
                <Link href="/">
                  <a className={menuStyle.btn}>Order now</a>
                </Link>
              </div>
            </div>
            <div className={menuStyle.items}>
              <div className={menuStyle.imgWrap}>
                <Image
                  className={menuStyle.img}
                  src="/img/vegan-meat-1.jpg"
                  layout="fill"
                  alt="food menu"
                />
                <div className={menuStyle.price}>$10.00</div>
              </div>
              <div className={menuStyle.detail}>
                <h1 className={menuStyle.title}>Meal set 01</h1>
                <p className={menuStyle.text}>
                  Chicken, Tomatoes, Mixed Vegetable
                </p>
                <Link href="/">
                  <a className={menuStyle.btn}>Order now</a>
                </Link>
              </div>
            </div>
            <div className={menuStyle.items}>
              <div className={menuStyle.imgWrap}>
                <Image
                  className={menuStyle.img}
                  src="/img/vegan-meat-1.jpg"
                  layout="fill"
                  alt="food menu"
                />
                <div className={menuStyle.price}>$10.00</div>
              </div>
              <div className={menuStyle.detail}>
                <h1 className={menuStyle.title}>Meal set 01</h1>
                <p className={menuStyle.text}>
                  Chicken, Tomatoes, Mixed Vegetable
                </p>
                <Link href="/">
                  <a className={menuStyle.btn}>Order now</a>
                </Link>
              </div>
            </div>
            <div className={menuStyle.items}>
              <div className={menuStyle.imgWrap}>
                <Image
                  className={menuStyle.img}
                  src="/img/vegan-meat-1.jpg"
                  layout="fill"
                  alt="food menu"
                />
                <div className={menuStyle.price}>$10.00</div>
              </div>
              <div className={menuStyle.detail}>
                <h1 className={menuStyle.title}>Meal set 01</h1>
                <p className={menuStyle.text}>
                  Chicken, Tomatoes, Mixed Vegetable
                </p>
                <Link href="/">
                  <a className={menuStyle.btn}>Order now</a>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
    
  );
};

export default Menu;
