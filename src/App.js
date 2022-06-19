import shopimg from "./Images/Shopping_edited.jpg";
import { Container, Row, Modal, Button, Col } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <Container style={{ backgroundImage: `url(${shopimg})` }}>
      <Row>
        <h1>Hello</h1>
      </Row>
      <Row>
        <Col
          md="5"
          style={{
            backgroundColor: "white",
          }}
        >
          <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <p>Modal body text goes here.</p>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary">Close</Button>
              <Button variant="primary">Save changes</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Col>
        <Col md="7">
          <h1>2nd Column</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
