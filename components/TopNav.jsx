import NavTopStyle from "../styles/Topnav.module.css";
import { Navbar, Container } from "react-bootstrap";
import { AiFillPhone, AiFillClockCircle } from "react-icons/ai";
import { SiMinutemailer } from "react-icons/si";

const TopNav = () => {
  return (
    <div className={NavTopStyle.nav}>
      <Container>
        <div className={NavTopStyle.wrap}>
          <Navbar.Text>
            <a className={NavTopStyle.link}>
              {" "}
              <span>
                {" "}
                <AiFillPhone />{" "}
              </span>{" "}
              +602-222-2222
            </a>
          </Navbar.Text>
          <Navbar.Text>
            <a className={NavTopStyle.link}>
              {" "}
              <span>
                {" "}
                <SiMinutemailer />{" "}
              </span>{" "}
              mr_bread_email@gmail.com
            </a>
          </Navbar.Text>
          <Navbar.Text>
            <a className={NavTopStyle.link}>
              {" "}
              <span>
                {" "}
                <AiFillClockCircle />{" "}
              </span>{" "}
              Open hours: Mon - Sun 8:00AM - 9:00PM
            </a>
          </Navbar.Text>
        </div>
      </Container>
    </div>
  );
};

export default TopNav;
