import { Col, Container, Row } from "react-bootstrap";
import StatStyle from "../styles/counterstat.module.css";

const StatsCounter = () => {
  return (
    <div className={StatStyle.counterItems}>
      <Container>
        <Row className={StatStyle.items}>
            <Col>
              <div className={StatStyle.counterWrap}>
                <h2 className={StatStyle.counter}>20</h2>
                <p className={StatStyle.title}>YEARS OF EXPERIENCES</p>
              </div>
            </Col>
            <Col>
              <div className={StatStyle.counterWrap}>
                <h2 className={StatStyle.counter}>85</h2>
                <p className={StatStyle.title}>MENU / DISH</p>
              </div>
            </Col>
            <Col>
              <div className={StatStyle.counterWrap}>
                <h2 className={StatStyle.counter}>25</h2>
                <p className={StatStyle.title}>STAFFS</p>
              </div>
            </Col>
            <Col>
              <div className={StatStyle.counterWrap}>
                <h2 className={StatStyle.counter}>500+</h2>
                <p className={StatStyle.title}>HAPPY CUSTOMERS</p>
              </div>
            </Col>
        </Row>
      </Container>
    </div>
  );
};

export default StatsCounter;
