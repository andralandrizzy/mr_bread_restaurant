import Link from "next/link";
import HeaderContent from "../components/HeaderContent";
import Menu from "../components/Menu";

const menu = () => {
  return (
    <>
      <div className="show_content menu">
        <HeaderContent title = "Our Menu" prevpage = "Home" activepage = "Menu"/>
      </div>
      <Menu />
      <div className="book">
        <Link href="/">
            <a>Book a reservation</a>
        </Link>
      </div>
    </>
  );
};

export default menu;
