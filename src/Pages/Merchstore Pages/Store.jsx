import { Row, Col, Button, Form } from "react-bootstrap";
import storepic from "../../Images/hobby-shop-interior.jpg";

function Store() {
  return (
    <Row className="mt-4 ms-3 storepage">
      <Col lg={2}>
        <Row className="justify-content-center">
          <img src={storepic} />
        </Row>
        <Row className="mt-3 justify-content-center">
          <Button>Change Photo</Button>
        </Row>
      </Col>
      <Col className="ps-5 ms-5 mt-3">
        <Form>
          <Row>
            <Col lg={3}>
              <Form.Label>Store Name</Form.Label>
            </Col>
            <Col lg={7}>
              <Form.Control />
            </Col>
          </Row>
          <Row className="mt-4">
            <Col lg={3}>
              <Form.Label>Location</Form.Label>
            </Col>
            <Col lg={7}>
              <Form.Control />
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
}

export default Store;
