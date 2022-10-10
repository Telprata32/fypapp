import { Container, Row, Col, Button, Form } from "react-bootstrap";

function Addproduct() {
  return (
    <Container
      className="addprod"
      style={{ width: "1081px", marginTop: "157px" }}
    >
      <Container className="box" style={{ height: "452px" }}>
        <Row>
          <Col lg={4}>
            <Row>
              <img style={{ height: "145px", width: "165px" }} src />
            </Row>
            <Row>
              <Button style={{ width: "165px", borderRadius: "0px" }}>
                Add Photo
              </Button>
            </Row>
          </Col>
          <Col>
            <Form>
              <Row>
                <Col lg={4}>
                  <Form.Label>Product Name</Form.Label>
                </Col>
                <Col>
                  <Form.Control type="text" />
                </Col>
              </Row>
              <Row className="mt-3">
                <Col lg={4}>
                  <Form.Label>Category</Form.Label>
                </Col>
                <Col>
                  <Form.Control type="list" />
                </Col>
              </Row>
              <Row className="mt-3">
                <Col lg={4}>
                  <Form.Label>Price</Form.Label>
                </Col>
                <Col>
                  <Form.Control type="number" />
                </Col>
              </Row>
              <Row className="mt-3">
                <Col lg={4}>
                  <Form.Label>Initial Stock</Form.Label>
                </Col>
                <Col>
                  <Form.Control type="number" />
                </Col>
              </Row>
              <Row className="mt-3">
                <Col lg={4}>
                  <Form.Label>Store Name</Form.Label>
                </Col>
                <Col>
                  <Form.Control type="text" />
                </Col>
              </Row>
              <Row className="mt-3">
                <Col lg={4}>
                  <Form.Label>Description</Form.Label>
                </Col>
                <Col>
                  <Form.Control as="textarea" rows="4" type="text" />
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
      <Row className="mt-4 d-grid justify-content-md-end">
        <Col>
          <Button>Save</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Addproduct;
