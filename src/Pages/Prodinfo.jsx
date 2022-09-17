import "../App.css";
import phone from "../Images/phone.jpeg";
import Iphone from "../Images/Iphone.jpg";
import { Col, Row, Container } from "react-bootstrap";

function Prodinfo() {
  return (
    <Container style={{ marginTop: "157px", marginInline: "120px" }}>
      <Row className="h-100">
        <Col>
          <img className="img-fluid mx-auto d-block" src={phone} />
        </Col>
        <Col className="ms-5">
          <h1>Iphone X Pro</h1>
          <h1 style={{ color: "#FD9843" }}>RM 1500.00</h1>
          <span>Quantity</span>
        </Col>
      </Row>
    </Container>
  );
}

export default Prodinfo;
