import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import AboutStyle from "../styles/about.module.css";

const About = () => {
  return (
    <>
      <div className={AboutStyle.wrapper}>
        <Container>
          <Row>
            <Col className={AboutStyle.imgWrap}>
              <div className={AboutStyle.aboutImg}>
                <Image
                  className={AboutStyle.img}
                  src="/img/about1.jpeg"
                  alt="about us image"
                  layout="fill"
                />
              </div>
              <div className={AboutStyle.aboutImg}>
                <Image
                  className={AboutStyle.img}
                  src="/img/about2.jpeg"
                  alt="about us image"
                  layout="fill"
                />
              </div>
            </Col>
            <Col>
              <div className={AboutStyle.aboutInfo}>
                <h1 className={AboutStyle.title}>
                  Mr. Bread <br /> Restaurant
                </h1>
                <p className={AboutStyle.description}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  natus temporibus corrupti repudiandae animi, eaque ab iusto
                  dolor assumenda. Eaque amet natus esse assumenda sequi eveniet
                  voluptatum perspiciatis, dignissimos, et rerum exercitationem
                  architecto voluptas officia consequatur minus cum tenetur
                  provident.
                </p>
                <p className={AboutStyle.operation}>Mon - Sun 8AM - 9PM</p>
                <p className={AboutStyle.phone}>
                  <span>+1 </span>602-222-2222
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default About;
