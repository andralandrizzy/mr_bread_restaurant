import Link from 'next/link';
import NavbarStyle from "../styles/navbar.module.css";
import { Navbar, Image, Nav, Container, NavDropdown } from "react-bootstrap";
import { AiOutlineShoppingCart } from "react-icons/ai"


const Header = () => {
  return (
    <Navbar sticky="top" collapseOnSelect expand="md" className={NavbarStyle.nav} variant="dark">
      <Container>
        <Link href="/">
          <Navbar.Brand className={NavbarStyle.lg_ling}>
            <Image className={NavbarStyle.lg_img} src="/img/logo.PNG" alt='' height="70" width="70"/>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className={NavbarStyle.navItem}>
            <Link href= "/">
              <a className={NavbarStyle.listItem}>Home
              </a>
            </Link>
            <Link href= "/about">
              <a className={NavbarStyle.listItem}>About
              </a>
            </Link>
            <Link href= "/menu">
              <a className={NavbarStyle.listItem}>Menu
              </a>
            </Link>
            <Link href= "/contact">
              <a className={NavbarStyle.listItem}>Contact
              </a>
            </Link>
            <Link href= "/order">
              <a className={NavbarStyle.listItem}>Place order
              </a>
            </Link>
            <Link href= "/">
              <div className={NavbarStyle.listItem}>
                <a><AiOutlineShoppingCart/></a>
              <span>2</span>
              </div>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
