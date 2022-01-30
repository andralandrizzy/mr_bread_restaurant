import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import contactForm from "../styles/contact.module.css";
const Contact = () => {
  return (
    <>
      <div className={contactForm.wrap}>
        <Container>
          <div className={contactForm.contactItem}>
            <div className={contactForm.infoContact}>
              <div className={contactForm.address}>
                  <span className={contactForm.icon}>
                      <GrLocation />
                  </span>
                <p>
                  Arizona, United States <br />{" "}
                  <span className={contactForm.street}>
                    Phoenix, Some Location
                  </span>
                </p>
              </div>
              <div className={contactForm.phone}>
                  <span className={contactForm.icon}>
                    <AiOutlinePhone />
                  </span>
                <p>
                  +602-222-2222 <br />{" "}
                  <span className={contactForm.hrs_operation}>
                    Mon - Sun 8:00AM - 9:00PM
                  </span>
                </p>
              </div>
              <div className={contactForm.email}>
                  <span className={contactForm.icon}>
                    <AiOutlineMail />
                  </span>
                <p>
                  mr_bread_email@gmail.com <br />{" "}
                  <span className={contactForm.msg}>
                    Send us your query at anytime
                  </span>
                </p>
              </div>
            </div>
            <div className={contactForm.formContainer}>
              <h1 style={{ fontSize: "2.5rem" }}>Contact us</h1>
              <Form className="mt-5" className = {contactForm.form}>
                <Form.Group
                  className="mb-4"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control type="name" placeholder="Enter name" />
                </Form.Group>
                <Form.Group
                  className="mb-4"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group
                  className="mb-4"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control type="text" placeholder="Your message subject" />
                </Form.Group>
                <Form.Group
                  className="mb-4"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control as="textarea" rows={3} placeholder="Message" />
                </Form.Group>
                <Button className={contactForm.btn} type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </div>
          <div className={contactForm.contact_map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d64724.36879925778!2d-112.10648393659795!3d33.47849287607396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b12ed50a179cb%3A0x8c69c7f8354a1bac!2sPhoenix%2C%20AZ!5e0!3m2!1sen!2sus!4v1643322373981!5m2!1sen!2sus"
              width="100%"
              height="480"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </Container>
      </div>
    </>
    
  );
};

export default Contact;
