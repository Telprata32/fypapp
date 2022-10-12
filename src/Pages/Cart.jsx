import { Row, Col, Container } from "react-bootstrap";
import { useCookies } from "react-cookie";
import { useState, useEffect } from "react";

function Cart() {
  // Get relevant cookies first

  return (
    <Container>
      <Container className="cart-header">
        <Row className="firstrow">
          <Col></Col>
          <Col>Product</Col>
          <Col>Unit Price</Col>
          <Col>QTY</Col>
          <Col>Total</Col>
        </Row>
      </Container>
      <Container className="cart overflow-scroll">
        <Row>
          <Col>
            <img style={{ height: "74px", width: "114px" }} />
          </Col>
          <Col>Product 1</Col>
          <Col>RM 1300</Col>
          <Col>3</Col>
          <Col>RM 3900</Col>
        </Row>
        <Row>
          <Col>
            <img style={{ height: "74px", width: "114px" }} />
          </Col>
          <Col>Product 1</Col>
          <Col>RM 1300</Col>
          <Col>3</Col>
          <Col>RM 3900</Col>
        </Row>
        <Row>
          <Col>
            <img style={{ height: "74px", width: "114px" }} />
          </Col>
          <Col>Product 1</Col>
          <Col>RM 1300</Col>
          <Col>3</Col>
          <Col>RM 3900</Col>
        </Row>
        <Row>
          <Col>
            <img style={{ height: "74px", width: "114px" }} />
          </Col>
          <Col>Product 1</Col>
          <Col>RM 1300</Col>
          <Col>3</Col>
          <Col>RM 3900</Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Cart;
