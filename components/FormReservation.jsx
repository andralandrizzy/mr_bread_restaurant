import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import ReserveFormStyle from "../styles/reserveForm.module.css";

const FormReservation = () => {
  return (
    <div className= {ReserveFormStyle.wrapper}>
    <h1 className= {ReserveFormStyle.intro}>Make Reservation</h1>
      <Form className={ReserveFormStyle.form}>
        <Row className="mb-4">
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="email" placeholder="Your Name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Your Email" />
          </Form.Group>
        </Row>
        <Row className="mb-4">
          <Form.Group as={Col} controlId="formGridPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="phone" placeholder="Phone" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridDate">
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" placeholder="Date" />
          </Form.Group>
        </Row>
        <Row className="mb-4">
          <Form.Group as={Col} controlId="formGridTime">
            <Form.Label>Time</Form.Label>
            <Form.Control type="time" placeholder="Time" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Person</Form.Label>
            <Form.Select defaultValue="Table for how many?">
              <option>Table for how many?</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
            </Form.Select>
          </Form.Group>
        </Row>
        <Button className={ReserveFormStyle.btn} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default FormReservation;
