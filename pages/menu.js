import Head from "next/head";
import Link from "next/link";
import { Container } from "react-bootstrap";
import CustomersFav from "../components/CustomersFav";
import HeaderContent from "../components/HeaderContent";
import Menu from "../components/Menu";

const menu = () => {
  return (
    <>
      <Head>
        <title>Mr Bread's Restaurant | Home</title>
        <meta name="description" content="phoenix restaurant" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="show_content menu">
        <HeaderContent title="Our Menu" prevpage="Home" activepage="Menu" />
      </div>
        <Container>
        <div className="cust_fav">
          <h1>Most resquested dish from our menu</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        </Container>
        <CustomersFav />
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
