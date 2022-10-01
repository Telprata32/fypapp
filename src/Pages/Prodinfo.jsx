import "../App.css";
import phone from "../Images/phone.jpeg";
import Iphone from "../Images/Iphone.jpg";
import { Col, Row, Container, Button } from "react-bootstrap";
import InputSpinner from "react-bootstrap-input-spinner";
import stricon from "../Images/store-icon.svg";
import profpic from "../Images/istockphoto-1270067126-612x612.jpg";

function Prodinfo() {
  let maxNum = 200;
  return (
    <Container
      className="prodinfo"
      style={{ marginTop: "157px", marginInline: "120px" }}
    >
      <Row>
        <Col style={{ height: "371px" }}>
          <img
            style={{ overflow: "hidden" }}
            className="h-100 img-fluid mx-auto d-block"
            src={phone}
          />
        </Col>
        <Col className="ms-5">
          <h1>Iphone X Pro</h1>
          <h1 style={{ color: "#FD9843" }}>RM 1500.00</h1>
          <Row className="mt-3">
            <Col style={{ display: "flex", alignItems: "center" }} lg="2">
              <span style={{ fontSize: "19px" }} className="align-middle">
                Quantity
              </span>
            </Col>
            <Col lg="3">
              <InputSpinner
                type={"int"}
                precision={0}
                max={maxNum}
                min={0}
                step={1}
              />
            </Col>
          </Row>
          <Row style={{ marginTop: "90px" }}>
            <Col>
              <Button
                style={{
                  width: "213px",
                  backgroundColor: "#FD9843",
                  borderColor: "#FD9843",
                }}
              >
                Add to Cart
              </Button>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col lg="1">
              <Button
                style={{
                  width: "38px",
                  backgroundColor: "#FD9843",
                  borderColor: "#FD9843",
                }}
              >
                <img style={{ width: "16px" }} src={stricon} />
              </Button>
            </Col>
            <Col style={{ display: "flex" }} lg="3">
              <span
                style={{ display: "flex", alignSelf: "flex-end" }}
                className="fs-5"
              >
                IFTech
              </span>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row style={{ marginTop: "61px" }}>
        <Col>
          <h4>Product Description</h4>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <p className="ps-3 pt-2 pb-5" style={{ border: "solid grey 1.5px" }}>
            Some Description
          </p>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <h4>Reviews</h4>
        </Col>
      </Row>

      {/*  This part is for the review section */}
      <Row className="mt-4">
        <Col>
          <img src={profpic} />
        </Col>
      </Row>
    </Container>
  );
}

export default Prodinfo;
