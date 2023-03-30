import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Row, Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <section id="contact">
      <Container>
        <Row className="mb-5 mt-5">
          <Col className="text-center">
            <h2 className="mt-5 mb-5">Get in Touch</h2>
            <a
              href="https://www.linkedin.com/in/neha-shaikh21/"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2x"
                className="p-2 m-2 rounded"
                style={{
                  background:
                    "-webkit-linear-gradient(#c7fedb,#fbd686,#f9ae82)",
                }}
              />
            </a>
            <a href="https://github.com/nehashaikh21" target="_blank">
              <FontAwesomeIcon
                icon={faGithub}
                size="2x"
                className="p-2 m-2 rounded"
                style={{
                  background:
                    "-webkit-linear-gradient(#c7fedb,#fbd686,#f9ae82)",
                  fill: "black",
                }}
              />
            </a>
            <a href="https://discordapp.com/users/Neha#2513." target="_blank">
              <FontAwesomeIcon
                icon={faDiscord}
                size="2x"
                className="p-2 m-2 rounded"
                style={{
                  background:
                    "-webkit-linear-gradient(#c7fedb,#fbd686,#f9ae82)",
                }}
              />
            </a>
          </Col>
          {/* <Col>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label className="text-left">Name</Form.Label>
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Button className="btn" type="submit">
                Submit
              </Button>
            </Form>
          </Col> */}
        </Row>
      </Container>
    </section>
  );
}
