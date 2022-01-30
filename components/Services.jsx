import { Col, Container, Row } from "react-bootstrap";
import ServiceStyle from "../styles/services.module.css";
import { GiCakeSlice, GiLovers } from 'react-icons/gi';
import { MdBusinessCenter } from 'react-icons/md';


const Services = () => {
  return (
    <div className={ServiceStyle.items}>
      <Container>
        <h1 className={ServiceStyle.intro}>Catering Services</h1>
        <div className={ServiceStyle.row}>
            <div className={ServiceStyle.wrap}>
              <a className={ServiceStyle.icon}><GiCakeSlice/></a>
              <h2 className={ServiceStyle.title}>Birthday Party</h2>
              <p className={ServiceStyle.text}>
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic.
              </p>
            </div>

            <div className={ServiceStyle.wrap}>
              <a className={ServiceStyle.icon}><MdBusinessCenter/></a>
              <h2 className={ServiceStyle.title}>Business Mettings</h2>
              <p className={ServiceStyle.text}>
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic.
              </p>
            </div>

            <div className={ServiceStyle.wrap}>
              <a className={ServiceStyle.icon}><GiLovers/></a>
              <h2 className={ServiceStyle.title}>Wedding Party</h2>
              <p className={ServiceStyle.text}>
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic.
              </p>
            </div>
        </div>
      </Container>
    </div>
  );
};

export default Services;
