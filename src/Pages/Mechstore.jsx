import "../App.css";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink, Routes, Route } from "react-router-dom";

function Merchstore() {
  return (
    <Container
      className="merch"
      style={{ marginTop: "157px", height: "452px" }}
    >
      <Row className="h-100">
        {/*  For this side navbar that will implement different css when one is active follow this: 
        https://stackoverflow.com/questions/60244592/how-do-you-set-an-active-class-in-react-and-css */}
        <Col className="me-5 px-0 text-center" lg={2}>
          <div>Store</div>
          <div>Products</div>
        </Col>
        <Col className="ms-5">Hello another text</Col>
      </Row>
    </Container>
  );
}

export default Merchstore;
