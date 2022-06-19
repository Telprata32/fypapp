import shopimg from "./Images/Shopping_edited.jpg";
import { Container, Row, Modal, Button, Col } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <Container
      style={{
        backgroundImage: `url(${shopimg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        height: "600px",
      }}
    >
      <Row className="h-100 py-4">
        <Col
          md="4"
          className="mx-auto"
          style={{
            backgroundColor: "white",
            borderRadius: "16px",
          }}
        >
          <Modal.Dialog className="h-100">
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
      </Row>
    </Container>
  );
}

export default App;
